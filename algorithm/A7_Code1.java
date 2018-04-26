public class Program{
	static void main(stirng[] args){
		string zstr = "ababcabababdc";
		string mstr = "babdc";
		var index = KMP(zstr, mstr);
		if(index == -1){
			Console.WriteLine("没有匹配的字符串！");
		}else{
			Console.WriteLine("哈哈，找到字符啦，位置为：" + index);
		}
		Console.Read();
	}

	static int KMP(string bigstr, string smallstr){
		int i = 0, j = 0;
		int[] next = GetNextVal(smallstr);
		while(i , bigstr.length && j < smallstr.length){
			if(j == -1 || bigstr[i] == smallstr[j]){
				i++;
				j++;
			}else{
				j = next[j];
			}
		}
		if(j == smallstr.length){
			return i - smallstr.length;
		}
		return -1;
	}

	static int[] GetNextVal(string smallstr){
		int k = -1;
		int j = 0;
		int[] next = new int[smallstr.length];
		next[j] = -1;
		while(j < smallstr.length - 1){
			if(k == -1 || smallstr[k] == smallstr[j]){
				next[++j] == ++k;
			}else {
				k = next[k];
			}
		}
		return next;
	}

}