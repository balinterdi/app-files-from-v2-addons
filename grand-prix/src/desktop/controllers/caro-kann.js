import Controller from '@ember/controller';

export default class CaroKannController extends Controller {
  get description() {
    return `
      The Caro–Kann is a common defence against the King's Pawn Opening. It is classified as a Semi-Open Game, like the Sicilian Defence and French Defence, although it is thought to be more solid and less dynamic than either of those openings. It often leads to good endgames for Black, who has the better pawn structure. It allows Black to circumvent enormous bodies of theory in 1.e4 openings such as the Ruy Lopez and the Sicilian Defence.
      Unlike its sister opening, the French Defence, the Caro–Kann does not hinder the development of Black's light-squared bishop. However, it comes at the cost of a tempo because Black has to play 1...c6 before pushing the pawn to c5, whereas Black can push c7–c5 in one move in the French Defence. White can combat the Caro–Kann in several different ways, often gaining a space advantage; additionally, Black has less mobility and can lag in development.
      In the 21st century, grandmasters Vladislav Artemiev and Alireza Firouzja use the opening with regularity, while Ding Liren and Hikaru Nakamura use it on occasion.
    `;
  }
}
