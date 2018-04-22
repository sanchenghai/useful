public class Program{
	static int[,] matrix;
	static string[,] flag;
	static string str1 = "acgbfhk";
	static string str2 = "cegefkh";
	static void Main(string[] args){
		matrix = new int[str1.length + 1, str2.length + 1];
		flag = new string[str1.length + 1, str2.length + 1];
		LCS(str1, str2);
		SubSequence(str1.Length, str2.Length);
		Console.Read();
	}

	static void LCS(string str1, string str2){
		int i = 0, j = 0;
		for(i = 0; i < str1.length; i++){
			matrix[i, 0] = 0;
		}
		for(j = 0; j < str2.length; j++){
			matrix[0, j] = 0;
		}

		for(i = 1; i <= str1.length; i++){
			for(j = 1; j <= str2.length; j++){
				if(str1[i - 1] == str2[j - 1]){
					matrix[i, j] = matrix[i - 1, j - 1] + 1;
					flag[i, j] = "left_up";
				}else{
					if(matrix[i - 1, j] >= matrix[i, j - 1]){
						matrix[i, j] = matrix[i - 1, j];
						flag[i, j] = "left";
					}else{
						matrix[i, j] = matrix[i, j - 1];
						flag[i, j] = "up";
					}
				}
			}
		}
	}

	static void SubSequence(int i, int j){
		if(i == 0 || j == 0){
			return;
		}
		if(flag[i,j] == "left_up"){
			Console.WriteLine("{0}: 当前坐标:（{1},{2}）", str2[j - 1], i - 1, j - 1);
			SubSequence{i - 1, j - 1};
		}else if(flag[i,j] == "up"){
			SubSequence{i, j - 1};
		}else{
			SubSequence{i - 1, j};
		}
	}

}