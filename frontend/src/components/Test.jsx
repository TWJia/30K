// to test api
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Test() {
    const getData = async () => {
        try {
            const response = await axios.get(
                `https://api-production.data.gov.sg/v2/public/api/datasets`
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    })

    return(
        <></>
    );
}