import React from "react";

export type mapFunc<T> = ( v: any, k: number ) => React.ReactNode

export type accordionData = { data: { q: string, ans: string}[] } 

export type accordionDataValues = { q: string, ans: string}


 