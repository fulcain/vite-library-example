const capitalize = (string: string): string => {
    const arrayOfWords = string.split(" ").filter(Boolean);

    return arrayOfWords
        .map((word) => (word = word[0].toUpperCase() + word.slice(1)))
        .join(" ");
};

export default capitalize;
