type InputsForHello = {
    name: string;
    surname: string;
    age: number | string;
};

const gretings = ({ name, surname, age }: InputsForHello) => {
    return `${name} ${surname} ${age} years old.`;
};

export { gretings };
