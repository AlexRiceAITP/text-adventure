var player = {
  name: ""
};

const n = {
a: function(){
  clear();
  message([
  "Your eyes creak open...",
  "It feels like your body has been in shut down mode and is slowing rebooting as one by one your senses come back to you. You feel dazed. Your blurry vision gradually becomes clearer and you can feel your muscles ache as you gently flex them back and forth. Then you hear a little bit of movement around you.",
  "\"Ah Patient you are awake at last!\" Says a mechanical voice as a small grey floating droid darts into your vision. \"My sensors report you are are still recovering from the event; Take your time to adjust to your surroundings and then please comply with your name.\"",
  "Scanning the room for a moment leaves you more confused and even with a sense of alarm... as if having an unusual droid appear in front of you wasn't enough, this wasn't your bedroom. It was some sort of medical room? A doctor's surgery maybe... did you have some sort of accident? The droid beeps again to grab your attention. \"Your name please.\""
  ]);
  choice('1',"my name is $input('name')",'a1');
  choice('2',"What... What's happening here?",'a2');
},

a2: function(){
  clear();
  message([
  "\"You've been in a medical induced stasis field for...\" The robot gives several beeps, you suspect it is computing the answer. \"Several hundred years, please contact the admin team for more exact details.\"",
  "Then without skipping a beat it repeats its initial inquiry. \"Please comply with your name. I am unable to proceed without confirming your name.\" You feel it's not going to get you anywhere unless you give it your name."]);
  choice('0',"my name is $input('name')",'a1');
},

a1: function(){
  clear();
  message([
  "Speaking your name leads to a little green light being lit on the floating droid, it seems happy with the answer.",
  "\"Thank you, $data('name'). Your name has been logged. Please proceed through the doors ahead and head up the corridor to the examination office, the admin team will be waiting for you.\"",
  "The droid whizzes off into a small slot in the wall. That's the end of the droid for the moment you guess. You could examine the room for further information and then proceed down the corridor to this \"Examination office.\" After all, there's nothing stopping what you do first."]);
  choice('1',"Examine the room",'a3');
  choice('2',"Head to the examination office",'a5');
},

a3: function(){
clear();
  message(
  "The room seems to be have a medical theme too it, a lot of the apparatuses seem strange it's not any sort of equipment you've seen before. It seems way to high tech for an average hospital... if you're even in a hospital?");
  choice('1',"Look through files",'a4');
  choice('2',"Head to the examination office",'a5');
},

a4: function(){
  clear();
  message(
  "Alongside the medical equipment is a stack of paperwork, you work your way through the paperwork, skimming your way through paper after paper for clues. However, nothing related to you seems to be here, just reports on other patients.");
  yesno("Do you want to read the other patients files?",'a6','a7');
},

a6: function(){ // yes
  clear();
  message(
  "You decide to snoop through the other patient files, you're not sure what to believe... there's a few vague references to freezing people in stasis.");
  choice('1',"Examine the room",'a3');
  choice('2',"Look through files",'a4');
  choice('3',"Head to the examination office",'a5');
},

a7: function(){ // no
  clear();
  message(
  "Deciding against prying into innocent patient files you neatly place the paperwork back where it belongs, how nice you're respecting patient confidentially.");
  choice('1',"Examine the room",'a3');
  choice('2',"Look through files",'a4');
  choice('3',"Head to the examination office",'a5');
},

a5: function(){
  clear();
  message([
  "It's probably a good idea to find a friendly face, you head towards the examination office...",
  "As you approach the door to the examination office the droid from before zips out of a small hole in the wall; it does a quick scan of you with a futuristic beam way beyond technology you're used to seeing, well unless you really are hundreds of years in the future, then it's probably quite common...",
  '\"Ah $data("name") allow me to unlock the door for you.\" The droid announces as it hovers to the door lock and you see the red light on the door turn to happy green colour. The droid nudges the door open with its own momentum and you peer into the examination room. ']);
  next('b');
},

b: function(){
  message ("Fin");
}
}

// Start
n.a();