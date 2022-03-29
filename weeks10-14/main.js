const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
let storyText = `"It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day."`;
let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let inserty = ["the soup kitchen", "Disneyland", "the White House"];
let insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    if (customName.value !== 'Bob') {
        const name = customName.value;

    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14) + " stone";
        const temperature = Math.round((94 - 32) * .5556) + " centigrade";
        storyText.replace(/94 fahrenheit/g, temperature);
        storyText.replace(/300 pounds/g, weight);

    }

    story.textContent = "";
    story.style.visibility = 'visible';
}