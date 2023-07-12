import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { IRootState } from "@redux/types";

const User = (props: any) => {
    const { user } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        import("@redux/user/actions").then((obj) => {
            dispatch(obj.getUserBasicInformations());
        });
    }, []);

    return <div style={{ color: "white" }}>{user?.fullName}</div>;
};

const mapStateToProps = (state: IRootState) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(User);
