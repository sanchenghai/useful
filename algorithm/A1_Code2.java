class Program{
	static void Main(string[] args){
		int x = 0,
			y = 0,
			z = 0,
			k = 0;
		for(k = 1; k <= 3; k++){
			x = 4 * k;
			y = 25 - 7 * k;
			z = 75 + 3 * k;
			Console.WriteLine("公鸡:{0}只，母鸡:{1}只,小鸡:{2}只", x, y, z);
		}
		Console.Read();
	}	
}