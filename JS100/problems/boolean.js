false || (true && false); // false || false => false
true || (1 + 2); // true -> short circuit
(1 + 2) || true; //  3 (last eval)
true && (1 + 2); //  3 (last eval)
false && (1 + 2); // false (short circuit)
(1 + 2) && true; // true
(32 * 4) >= 129; //  false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// (!true || false || true ) || false
// true || false
// true