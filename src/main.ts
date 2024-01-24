type InputsForHello = {
    name: string;
    surname: string;
    age: number | string;
};

const grettings = ({ name, surname, age }: InputsForHello) => {
    return `${name} ${surname} ${age} years old.`;
};

export { grettings };
