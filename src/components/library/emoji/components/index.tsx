import React, { useEffect } from "react";
import AppleEmoji from "@images/appleEmoji.png";
import { IEmojiCategoriesProps } from "./types";
import * as Styles from "./styles";

export function EmojiCategories(props: IEmojiCategoriesProps) {
    const { categories } = props;
    const {
        smileyAndEmotions,
        animalsAndNature,
        foodAndDrink,
        activities,
        travelAndPlaces,
        objects,
        symbols,
        flags,
    } = categories;

    const categoriesHandler = Object.keys(categories)?.map((data) => {
        let x: JSX.Element;
        switch (data) {
            case "smileyAndEmotions":
                x = (
                    <EmojiList
                        category={smileyAndEmotions}
                        title={`smiley and emotions`}
                    />
                );
                break;
            case "animalsAndNature":
                x = (
                    <EmojiList
                        category={animalsAndNature}
                        title={`animals and nature`}
                    />
                );
                break;
            case "foodAndDrink":
                x = (
                    <EmojiList
                        category={foodAndDrink}
                        title={`food and drink`}
                    />
                );
                break;
            case "activities":
                x = <EmojiList category={activities} title={`activities`} />;
                break;
            case "travelAndPlaces":
                x = (
                    <EmojiList
                        category={travelAndPlaces}
                        title={`travel and places`}
                    />
                );
                break;
            case "objects":
                x = <EmojiList category={objects} title={`objects`} />;
                break;
            case "symbols":
                x = <EmojiList category={symbols} title={`symbols`} />;
                break;
            case "flags":
                x = <EmojiList category={flags} title={`flags`} />;
                break;
            default:
                x = <>Empty</>;
        }
        return x;
    });

    return <>{categoriesHandler}</>;
}

function EmojiList(props: any) {
    const { category } = props;

    return (
        <>
            {Object.values(category).map((data: any, index) => {
                console.log("category ", data);
                return (
                    <Styles.EmojiBlock
                        aria-label={data.category}
                        key={index}
                        bgImage={`url("${AppleEmoji}")`}
                        position={`${data.imagePosition?.[0]}% ${data.imagePosition?.[1]}%`}
                    >
                        <span></span>
                    </Styles.EmojiBlock>
                );
            })}
        </>
    );
}
