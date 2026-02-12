/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  let finalScore = score;
  
  if (score<0 || score>100) {
    return "INVALID";
  } else {
    if (hasExtraCredit) {
      if (!(score > 95)) {
        finalScore = score + 5;
      } else {
        finalScore = 100;
      }
    }
    switch (true) {
      case finalScore>=90 && finalScore<=100:
        return "A";
        break;
      case finalScore>=80 && finalScore<=89:
        return "B";
        break;
      case finalScore>=70 && finalScore<=79:
        return "C";
        break;
      case finalScore>=60 && finalScore<=69:
        return "D";
        break;
      case finalScore>=0 && finalScore<=59:
        return "F";
        break;
      default:
        return "INVALID";
        break;
    }
  }
}
