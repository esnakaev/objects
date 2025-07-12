const users = [
{
username: 'David',
status: 'online',
lastActivity: 10
},
{
username: 'Lucy',
status: 'offline',
lastActivity: 22
},
{
username: 'Bob',
status: 'online',
lastActivity: 104
}
];
const usersOnline = users.filter((person) => person.status === 'online');
const usersOnlineNames = usersOnline.map((person) => person.username).join(', ');
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: 'Максим' },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (patients, orders) => {
    const objectWithIndexes = patients.reduce((acc, curPerson) => {
        acc[curPerson.id] = curPerson;
        return acc;
    }, {});
    return orders.map((order) => objectWithIndexes[order]);
}
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);



const handleObject = (obj, key, action = 'get') => {
    switch(action) {
        case 'get':
            return obj[key];
            case 'delete': {
                delete obj[key]
                return obj;
            }
            case 'add' :
                obj[key] = "";
                return obj;
            default: 
                return obj;
    }  
};
const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
};
const result2 = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result2);

const student2 = {
fullName: 'Максим',
experienceInMonths: 12,
stack: ['HTML','CSS','JavaScript','React'],
}

function giveJobToStudent(student, jobName) {
    alert (`Поздравляем! У студента ${student2.fullName} появилась новая работа! Теперь он ${jobName}`)
    return {
        ...student2,
        job: jobName,
    }
};
const updatedStudent = giveJobToStudent(student2,'веб-разработчик');
console.log (student2)

