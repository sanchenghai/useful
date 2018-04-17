class Program{
	static void Main(string[] args){
		int x = 0,
			y = 0,
			z = 0;
		for(x = 1; x < 20; x++){
			for(y = 1; y < 33; y++){
				z = 100 - x - y;
				if((z % 3) == 0 && (5 * x + 3 * y + z / 3) == 100){
					Console.WriteLine("公鸡:{0}只，母鸡:{1}只,小鸡:{2}只", x, y, z);
				}
			}
		}
		Console.Read();
	}	
}