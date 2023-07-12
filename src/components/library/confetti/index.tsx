import React, { useEffect, useRef } from "react";
import ConfettiIcon from "@icons/confetti.svg";
import * as Styles from "./styles";

export function Confetti() {
    const canvasRef = useRef() as any;
    let flip = 1;

    useEffect(() => {
        const canvas = document.getElementById("confetti") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
        let pieces = [] as any;
        let active = true;
        let isTouched = false;

        function randomColors() {
            let colors = ["red", "green", "blue", "yellow"];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function draw(obj: any) {
            let { color, size, rotation, index, x, y, alpha } = obj;
            if (ctx) {
                ctx.save();

                ctx.fillStyle = color;
                ctx.globalAlpha = 1;
                ctx.translate(x + size / 2, y + size / 2);
                ctx.rotate(rotation);
                ctx.globalAlpha = alpha;

                if (index % 5 === 0) {
                    ctx.beginPath();
                    ctx.arc(-size / 2, -size / 2, size / 1.5, 0, Math.PI * 2);
                    ctx.fill();
                } else if (index % 3 === 0) {
                    ctx.fillRect(-size / 2, -size / 2, size, size);
                } else {
                    ctx.fillRect(-size / 2, -size / 2, size, size / 2);
                }
                ctx.restore();
            }
            update(obj);
        }

        function update(obj: any) {
            let { x, y, dx, rs, size, index, fallingY, alpha } = obj;
            try {
                if (y) {
                    if (y + size < 60 && !isTouched) {
                        isTouched = true;
                    } else if (y > canvas.height - 100) {
                        delete pieces[index];
                    } else if (
                        y > canvas.height / 2 &&
                        isTouched &&
                        alpha > 0
                    ) {
                        obj.alpha -= 0.01;
                    }
                    if (
                        (x + size > canvas.width || x + size < 0) &&
                        !isTouched
                    ) {
                        obj.dx = -dx;
                    }
                    if (isTouched) {
                        obj.dy = fallingY;
                        obj.dx = 0;
                    }
                    if (index % 2) {
                        obj.x += obj.dx;
                    } else {
                        obj.x -= obj.dx;
                    }

                    obj.y -= obj.dy;
                    obj.rotation += rs;
                }
            } catch (e) {
                console.log("e ", e);
            }
        }

        for (let i = 0; i < 50; i++) {
            let obj = {
                size: Math.random() * 10 + 2,
                y: canvas.height - 102,
                x: i % 2 ? 15 : 300,
                dx: Math.random() * 20,
                dy: Math.random() * 30 + 2,
                rs: Math.PI * 2 * Math.random() * 0.01,
                rotation: Math.PI * 2 * Math.random(),
                color: randomColors(),
                fallingY: Math.random() - 1.5 * 2,
                fallingX: Math.random() > 0.5 ? -1 : 1,
                alpha: 1,
                index: i,
            };
            pieces.push(obj);
        }

        function animate() {
            if (active) {
                canvasRef.current = requestAnimationFrame(animate);
                ctx?.clearRect(0, 0, canvas.width, canvas.height);

                pieces.forEach((data) => {
                    draw(data);
                });

                if (pieces.length === 0) {
                    active = false;
                    ctx?.clearRect(0, 0, canvas.width, canvas.height);
                    cancelAnimationFrame(canvasRef.current);
                }
            }
        }
        let timer = setTimeout(() => {
            animate();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Styles.ConfettiWrapper>
            <img
                className={"leftConfetti"}
                src={ConfettiIcon}
                alt={"partyCOnfetti"}
            />
            <img src={ConfettiIcon} alt={"partyCOnfetti"} />
            <canvas
                ref={canvasRef}
                width={"680px"}
                height={"400px"}
                id={"confetti"}
            ></canvas>
        </Styles.ConfettiWrapper>
    );
}
