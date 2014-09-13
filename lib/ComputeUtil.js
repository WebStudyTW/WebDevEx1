var app = exports = module.exports = ComputeUtil;

function ComputeUtil () {

};

// num1 與 num2 相加，並回傳結果
ComputeUtil.prototype.add = function(num1, num2) {

    return (num1 + num2);
};

// num1 與 num2 相乘，並回傳結果
ComputeUtil.prototype.multiply = function(num1, num2) {

    return num1 * num2;
};

// num1 除以 num2，並回傳結果
ComputeUtil.prototype.divide = function(num1, num2) {

    return num1 / num2;
};

// num1 減 num2，並回傳結果
ComputeUtil.prototype.minus = function(num1, num2) {
    var num3 = num1 - num2  ;
    return num3;
};

// 把字串切割為陣列，並回傳結果 ex. 'abc' => ['a', 'b', 'c']
ComputeUtil.prototype.stringSplit = function(string) {
	var strSplitted = string.split("");
    return strSplitted;
};

// 各字母轉換數字，並回傳結果
// A -> 10, B -> 11, C -> 12, D -> 13, E -> 14,
// F -> 15, G -> 16, H -> 17, I -> 34, J -> 18,
// K -> 19, M -> 21, N -> 22, O -> 35, P -> 23,
// Q -> 24, T -> 27, U -> 28, V -> 29, W -> 32,
// X -> 30, Z -> 33, L -> 20, R -> 25, S -> 26, Y -> 31
ComputeUtil.prototype.mapID = function(alphabet) {

	switch(alphabet)
	{
		case 'A':
			return 10;
			break;
			
		case 'B':
			return 11;
			break;
		
		case 'C':
			return 12;
			break;
		
		case 'D':
			return 13;
			break;
		
		case 'E':
			return 14;
			break;
		
		case 'F':
			return 15;
			break;
		
		case 'G':
			return 16;
			break;
		
		case 'H':
			return 17;
			break;
		
		case 'I':
			return 34;
			break;
		
		case 'J':
			return 18;
			break;
		
		case 'K':
			return 19;
			break;
		
		case 'M':
			return 21;
			break;
		
		case 'N':
			return 22;
			break;
		
		case 'O':
			return 35;
			break;
		
		case 'P':
			return 23;
			break;
		
		case 'Q':
			return 24;
			break;
		
		case 'T':
			return 27;
			break;
		
		case 'U':
			return 28;
			break;
		
		case 'V':
			return 29;
			break;
		
		case 'W':
			return 32;
			break;
		
		case 'X':
			return 30;
			break;
		
		case 'Z':
			return 33;
			break;
		
		case 'L':
			return 20;
			break;
		
		case 'R':
			return 25;
			break;
		
		case 'S':
			return 26;
			break;
		
		case 'Y':
			return 31;
			break;
		
	}
    return 0;
};

// 計算 num1 除以 num2 的餘數，並回傳結果
ComputeUtil.prototype.mod = function (num1, num2) {

    return num1 % num2;
}
