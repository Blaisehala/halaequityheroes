// Photo library (Pexels) with descriptive alt text, used across pages and cards
export type Photo = { src: string; alt: string };

const p = (file: string, alt: string): Photo => ({ src: `/images/${file}`, alt });

export const photos = {
  peekingTogether: p("hero1.jpg", "Two young girls peeking out together with big smiles"),
  pointingAndSmiling: p("hero2.jpg", "A young boy pointing at the camera beside a smiling friend"),
  siblingsInStripes: p("hero3.jpg", "Two children standing side by side, sharing a bright moment together"),
  embracingOnRoad: p("hero4.jpg", "Two boys in bright clothes laughing with their arms around each other"),
  schoolBus: p("hero5.jpg", "Children smiling and waving from the windows of a school bus"),
  hugOutside: p("pexels-1dera-38247418.jpg", "Two young children sharing a hug outside"),
  wavingByTree: p("pexels-2xman-yef-469319062-33959049.jpg", "Three boys smiling and waving beside a tree"),
  siblingsDressedUp: p("pexels-ab-pixels-ng-39917774.jpg", "Three young siblings standing together in their best clothes"),
  framingFace: p("pexels-andy-barbour-5499489.jpg", "A smiling girl framing her face with her hands"),
  hillsideGroup: p("pexels-chris-wade-ntezicimpa-564856410-17848896.jpg", "A group of children gathered on a hillside path among trees"),
  boysLaughing: p("pexels-chrofit-the-man-to-call-2515393-4533264.jpg", "Two young boys laughing together"),
  caregiverGroup: p("pexels-conrad-roy-2153832154-35413703.jpg", "A caregiver seated with a group of smiling children in a garden"),
  blueWall: p("pexels-hashtag-melvin-1163687-19838507.jpg", "Three children sitting together against a blue wall"),
  portraitByWater: p("pexels-isaac-naph-567522839-37578640.jpg", "Portrait of a smiling child by the water"),
  portraitPinkShirt: p("pexels-jedidiahjordan-14182906.jpg", "Portrait of a smiling child in a pink checked shirt"),
  friendsSitting: p("pexels-justebuka-20407105.jpg", "Two boys smiling while sitting with their friends"),
  groupOutdoors: p("pexels-kelly-2869085.jpg", "A group of children smiling together outdoors"),
  kaftans: p("pexels-pexels-by-ardarh-664883754-33665659.jpg", "Boys in traditional kaftans standing together"),
  cheeringField: p("pexels-safari-consoler-3290243-11350469.jpg", "Children cheering with raised fists in a green field"),
  twoSmiling: p("pexels-shutter-rwanda-2157056879-40419125.jpg", "Two children smiling against a wall"),
  benchRow: p("pexels-sirmudi_photography-2155088036-34253698.jpg", "A row of children sitting together and smiling"),
  brightClothes: p("pexels-solomon-onyeagoro-1030566678-29738199.jpg", "Two boys in bright clothes laughing and embracing"),
  nightPortrait: p("pexels-thato-moiketsi-909645793-33679726.jpg", "Three siblings posing together for a portrait"),
  schoolBackpacks: p("pexels-travelers_tw-1445512897-37240949.jpg", "Schoolchildren with backpacks playfully covering their faces"),
  laughingCrowd: p("pexels-umar-farouk-2153918299-33499651.jpg", "A crowd of children laughing outside a building"),
  brotherSister: p("pexels-valdansmedia-13437141.jpg", "A smiling brother and his younger sister"),
  colourfulDress: p("pexels-valdansmedia-29147029.jpg", "A little girl in a colourful dress smiling"),
} satisfies Record<string, Photo>;
