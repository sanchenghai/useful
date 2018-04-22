public class Program{
	static int[,] matrix;
	static string str1 = string.Empty;
	static string str2 = string.Empty;
	static void Main(string[] args){
		while(true){
			str1 = Console.ReadLine();
			str2 = Console.ReadLine();
			matrix = new int[str1.length + 1, str2.length + 1];
			Console.WriteLine("字符串 {0} 和 {1} 的编辑距离为:{2}\n", str1, str2, LD());
		}
	}

	public static int LD(){
		int i = 0, j = 0;
		for(i = 0; i <= str1.length; i++){
			matrix[i, 0] = i;
		}
		for(j = 0; j <= str2.length; j++){
			matrix[0, j] = j;
		}

		int temp1 = 0, min = 0;
		for(i = 1; i <= str1.length; i++){
			for(j = 1; j <= str2.length; j++){
				if(str1[i - 1] == str2[j - 1]){
					matrix[i, j] = matrix[i - 1, j - 1];
				}else{
					temp1 = Math.Min(martix[i - 1, j], martix[i, j - 1]);
					min = Math.Min(temp1, martix[i - 1, j - 1]);
					martix[i, j] = min + 1;
				}
			}
		}
		return matrix[str1.length, str2.length];
	}

}