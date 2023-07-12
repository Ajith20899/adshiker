import { InfluencerType } from "./reducer";

export const selectInfluencer = (state: any): InfluencerType =>
    state.influencer;
