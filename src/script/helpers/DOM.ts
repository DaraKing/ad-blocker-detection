export const createElement = (element:string) : Element => document.createElement(element);
export const createElementWithId = (element:string, id:string) : Element => {
    let el = createElement(element);
    el.id = id;

    return el;
};
export const createElementWithClasses = (element:string, classes:Array<string>) : Element => {
    let el = createElement(element);
    classes.forEach((className) => {
        el.classList.add(className);
    })

    return el;
};
export const QS = (selector:string) : Element => document.querySelector(selector);
export const QSall = (selector:string) : NodeList => document.querySelectorAll(selector);
