/*
  GALLERY PHOTOS
  --------------
  The cork board on the home page shows the photos listed here, in this order.

  Each photo has
    src      the file, inside the folder images/gallery/
    alt      a plain description for visitors who use screen readers (keep it short)
    caption  optional text shown under the photo on the board and in the large view
    pos      optional. Which part of the photo to keep in the square on the board,
             for example "50% 0%" keeps the top. The default is the centre.

  Notes
    - File names are case-sensitive on GitHub Pages: "Photo-01.JPG" is not the same as "photo-01.jpg".
    - If a photo is missing, it is simply left off the board. If every photo is missing,
      the whole Gallery section (and its menu link) is hidden.
    - To add a photo, copy one line, change the file name and the description.
*/
window.GALLERY = [
  { src: "images/gallery/photo-01.jpg", alt: "Two women smiling as a gift wrapped in teal foil is handed over", caption: "" },
  { src: "images/gallery/photo-02.jpg", alt: "Presenting an introduction to machine learning to a classroom of students, some raising their hands", caption: "" },
  { src: "images/gallery/photo-03.jpg", alt: "Standing with a student who is giving a thumbs up", caption: "" },
  { src: "images/gallery/photo-04.jpg", alt: "Group photo with students and faculty in a classroom", caption: "" },
  { src: "images/gallery/photo-05.jpg", alt: "Two women exchanging a small potted plant in front of a seminar banner", caption: "" },
  { src: "images/gallery/photo-06.jpg", alt: "Attendees seated at computers in a training room", caption: "" },
  { src: "images/gallery/photo-07.jpg", alt: "Standing with two colleagues, all in sarees", caption: "" },
  { src: "images/gallery/photo-08.jpg", alt: "Lighting a ceremonial lamp at the start of an event", caption: "" },
  { src: "images/gallery/photo-09.jpg", alt: "Talking with attendees during a session", caption: "" },
  { src: "images/gallery/photo-10.jpg", alt: "Speaking to a seated audience in a seminar room", caption: "" },
  { src: "images/gallery/photo-11.jpg", alt: "Poster for the Machine Learning Seminar on 30 March 2026", caption: "", pos: "50% 0%" }
];
