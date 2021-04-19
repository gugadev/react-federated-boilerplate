/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom/extend-expect";
import "reflect-metadata";
// @ts-ignore
import MutationObserver from "@sheerun/mutationobserver-shim";
import { config } from "dotenv";

window.MutationObserver = MutationObserver;

config({ path: "./env" });
