class Program{
	static void Main(string[] args){
		int k = 0;
		for(k = 1; k < 5; k++){
			int h = 721 * k,
				a = 265 * k,
				b = 191 * k,
				c = 148 * k,
				d = 129 * k,
				e = 76 * k;
			Console.WriteLine("a={0},b={1},c={2},d={3},e={4} ------h={5}\n", a, b, c, d, e, h);
		}
		Console.Read();
	}
}