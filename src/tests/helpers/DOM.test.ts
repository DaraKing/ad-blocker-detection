import {expect} from 'chai';
import {createElementWithClasses, createElementWithId, QS, QSall} from "../../script/helpers/DOM";
// @ts-ignore
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;

describe('Module: src/helpers/DOM.ts', function() {
    it('Function createElementWithClasses return correct values', function() {
        let divs = [
            {
                element: "div",
                classNames: ["aaa", "bbb"]
            },
            {
                element: "span",
                classNames: ["small-text", "uppercase", "bold"]
            },
            {
                element: "h1",
                classNames: ["title"]
            }
        ];

        divs.forEach((div) => {
            let content = createElementWithClasses(div.element, div.classNames);

            expect(content.nodeName).equal(div.element.toUpperCase());
            expect(content.className).equal(div.classNames.join(" "));
        })
    });

    it('Function createElementWithId return correct values', function () {
        let divs = [
            {
                element: "div",
                id: "main-content"
            },
            {
                element: "span",
                id: "text"
            },
            {
                element: "h1",
                id: "title"
            }
        ];

        divs.forEach((div) => {
            let content = createElementWithId(div.element, div.id);

            expect(content.nodeName).equal(div.element.toUpperCase());
            expect(content.id).equal(div.id);
        })
    });

    it('Function QS fetch correct DOM element', function () {
        let testId = createElementWithId("div", "test-id");
        document.body.appendChild(testId);

        let divId = QS("#test-id");
        expect(divId.id).equal("test-id");

        let testClass = createElementWithClasses("div", ["test-class"]);
        document.body.appendChild(testClass);

        let divClass = QS(".test-class");
        expect(divClass.className).equal("test-class");

        let nullElement = QS(".null-class");
        expect(nullElement).equal(null);
    });

    it('Function QSall fetch correct DOM elements', function () {
        let noElements = QSall(".null-tests");
        expect(noElements.length).equal(0);

        const numberOfDivs = 3;

        for(let i=0; i<numberOfDivs; i++) {
            document.body.appendChild(createElementWithClasses("div", ["multiple-class"]));
        }

        let multipleClasses = QSall(".multiple-class");
        expect(multipleClasses.length).equal(numberOfDivs);
    });
});
