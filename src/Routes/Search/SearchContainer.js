import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        psearchTerm: "",
        error: null,
        loading: false
    };

    render() {
        const {movieResults,tvResults,psearchTerm,error,loading} = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                psearchTerm={psearchTerm}
                error={error}
                loading={loading}
            />
        );
    }
}