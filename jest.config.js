module.exports = {
    preset: "ts-jest",
    coverageReporters: ["html"],
    setupFilesAfterEnv: ["./src/setupTests.ts"],
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/src/__mocks__/style.mock.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/__mocks__/file.mock.js",
        "src/(.*)": "<rootDir>/src/$1",
    },
};
