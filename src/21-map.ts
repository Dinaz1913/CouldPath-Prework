export {};

function tidyUpString(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
const capitalise = (str: string): string => str[0].toUpperCase() + str.substring(1)//var nenorādīt beigas norāda sākumu substring funkcijai, jo tālāk viņš atardīs stringu



const mentors = ["/Daniel ", "irina ", " gordon", "ashleigh "];
let mentorsTidy = mentors.map((mentor) => capitalise(tidyUpString(mentor))); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
