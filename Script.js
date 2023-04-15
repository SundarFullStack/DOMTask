//1. DOM Functional Based Approiaches

//2. DOM Events

//Label and input element creation using DOM in several Lines

// let emaillabel = document.createElement('label');

// emaillabel.setAttribute('for', 'emailid');

// emaillabel.innerText = 'Email Id';

// document.body.append(emaillabel);


// let emailInput = document.createElement('input');

// emailInput.setAttribute('type', 'email');

// emailInput.setAttribute('id', 'emailid');

// document.body.append(emailInput);


//Label Creation function

function createLabel(tagName, attrtiname, attriValue, content) {

    let label = document.createElement(tagName);

    label.setAttribute(attrtiname, attriValue);

    label.innerText = content;
    
    return label;

}

//Element creator function

function createElement(tagName, attrtiname, attriValue) {

    let label = document.createElement(tagName);

    label.setAttribute(attrtiname, attriValue);

    return label;

}

//Input creating Function

function createInput(tagName, attrtiname, attriValue, idName,idValue) {

    let input = document.createElement(tagName);

    input.setAttribute(attrtiname, attriValue);

    input.setAttribute(idName, idValue);
    
    return input;

}

//create button

function createbutton(tagName, attrtiname, attriValue, idName,idValue,content) {

    let input = document.createElement(tagName);

    input.setAttribute(attrtiname, attriValue);

    input.setAttribute(idName, idValue);
    
    input.innerText = content;

    return input;

}

//create line breaker tag

function lineBreaker(tagname) {
    
    let br = document.createElement(tagname);

    return br;
}

//create body
let container = (createElement('div', 'class', 'container'));

let row = (createElement('div', 'class', 'row'));

let box_inside = (createElement('div', 'class', 'box_inside'));




//create element(firstname)

let firstnamelabel  = (createLabel("label", "for", "firstname", 'First Name'));

let linebreaker1 = (lineBreaker('br'));

let linebreaker2 = (lineBreaker('br'));

let linebreaker3 = (lineBreaker('br'));

let linebreaker4 = (lineBreaker('br'));

let linebreaker5 = (lineBreaker('br'));

let firstnameInput = (createInput('input', 'type', 'text', 'id', 'firstname:'));

//create element(middlename)

let middlenamelabel  = (createLabel("label", "for", "middlename", 'Middle Name:'));

let middlenameInput = (createInput('input', 'type', 'text', 'id', 'middlename'));



//create element(secondname)

let secondnamelabel  = (createLabel("label", "for", "secondname", 'Second Name:'));

let secondnameInput = (createInput('input', 'type', 'text', 'id', 'secondname'));

//create element(emaillabel & input)

let emailLabel  = (createLabel("label", "for", "email", 'Email Id:'));

let emailInput = (createInput('input', 'type', 'email', 'id', 'email'));

//create element(password & input)

let passwordlabel  = (createLabel("label", "for", "password", 'Password:'));

let passwordInput = (createInput('input', 'type', 'Password', 'id', 'password'));

//create element(submit)


let button = (createbutton('button', 'type', 'button', 'class', 'btn btn-primary','submit'));



//append body

document.body.append(container);

container.append(row);

row.append(box_inside);

//append element(firstname)

box_inside.append(firstnamelabel);

box_inside.append(firstnameInput);


//append element(middlename)

box_inside.append(linebreaker1);

box_inside.append(middlenamelabel);

box_inside.append(middlenameInput);


//append element(secondname)

box_inside.append(linebreaker2);

box_inside.append(secondnamelabel);

box_inside.append(secondnameInput);



//append element(email)

box_inside.append(linebreaker3);

box_inside.append(emailLabel);

box_inside.append(emailInput);

//append element(password)

box_inside.append(linebreaker4);

box_inside.append(passwordlabel);

box_inside.append(passwordInput);

//append element(button)
box_inside.append(linebreaker5);

box_inside.append(button);
