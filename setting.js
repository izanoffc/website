const partA = "bagian1";
const partB = "bagian2";

const CONFIG = {
    TOKEN: partA + partB,
    USER: "izanoffc/izanoffc",
    REPO: "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",
    DB_FILE: "token.json",
    USER_FILE: "user.json"
};

function getApiUrl(filename) {
    return `https://api.github.com/repos/${CONFIG.USER}/${CONFIG.REPO}/contents/${filename}`;
}