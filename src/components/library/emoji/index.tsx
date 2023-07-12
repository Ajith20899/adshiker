import React, { useEffect, useState } from "react";
import { CATEGORIES_OF_EMOJI } from "@utils/constants";
import EmojiData from "../../../fixtures/library/emoji/index.json";
import { EmojiCategories } from "./components";
import * as Styles from "./styles";

export function EmojiPicker(props: any) {
    const [list, setList] = useState({}) as any;
    const [imagePositions, setImagePositions] = useState([]) as any[];

    console.log("EmojiData leng ", EmojiData.length, imagePositions.length);

    useEffect(() => {
        const tempPositions = Object.assign([], imagePositions);
        const maxCount = 57;
        let value: number[];

        for (let i = 0; i < maxCount; i++) {
            for (let j = 0; j < maxCount; j++) {
                value = [(i / maxCount) * 100, (j / maxCount) * 100];
                tempPositions.push(value);
            }
        }
        setImagePositions(tempPositions);
    }, []);

    useEffect(() => {
        const tempEmoji = Object.assign([], EmojiData);
        let tempStoreData = {
            smileyAndEmotions: {},
            animalsAndNature: {},
            foodAndDrink: {},
            activities: {},
            travelAndPlaces: {},
            objects: {},
            symbols: {},
            flags: {},
        };

        tempEmoji?.forEach(function (data: any, index: number) {
            data[`imagePosition`] = imagePositions[index];
            switch (data.category) {
                case CATEGORIES_OF_EMOJI.smileyAndEmotions:
                    if (tempStoreData.smileyAndEmotions)
                        tempStoreData.smileyAndEmotions[
                            `${data.unified}`
                        ] = data;
                    break;
                case CATEGORIES_OF_EMOJI.animalsAndNature:
                    if (tempStoreData.animalsAndNature)
                        tempStoreData.animalsAndNature[
                            `${data.unified}`
                        ] = data;
                    break;
                case CATEGORIES_OF_EMOJI.foodAndDrink:
                    if (tempStoreData.foodAndDrink)
                        tempStoreData.foodAndDrink[`${data.unified}`] = data;
                    break;
                case CATEGORIES_OF_EMOJI.activities:
                    if (tempStoreData.activities)
                        tempStoreData.activities[`${data.unified}`] = data;
                    break;
                case CATEGORIES_OF_EMOJI.travelAndPlaces:
                    if (tempStoreData.travelAndPlaces)
                        tempStoreData.travelAndPlaces[`${data.unified}`] = data;
                    break;
                case CATEGORIES_OF_EMOJI.objects:
                    if (tempStoreData.objects)
                        tempStoreData.objects[`${data.unified}`] = data;
                    break;
                case CATEGORIES_OF_EMOJI.symbols:
                    if (tempStoreData.symbols)
                        tempStoreData.symbols[`${data.unified}`] = data;
                    break;
                case CATEGORIES_OF_EMOJI.flags:
                    if (tempStoreData.flags)
                        tempStoreData.flags[`${data.unified}`] = data;
                    break;
                default:
                    return;
            }
        });
        setList(tempStoreData);
    }, [imagePositions]);

    return (
        <Styles.EmojiPickerWrapper>
            <EmojiCategories categories={list} />
        </Styles.EmojiPickerWrapper>
    );
}
