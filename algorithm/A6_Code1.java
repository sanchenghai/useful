public class SlopOne{
	public static Dictionary<int, Product> dicRatingSystem = new Dictionary<int Product>();
	public Dictionary<string, Rating> dic_Matrix = new Dictionary<sting, Rating>();
	public HashSet<int> hash_items = new HashSet<int>();

	public void AddUserRatings(IDictionary<int, List<Product>> userRatings){
		foreach(var user1 in userRatings){
			foreach(var item1 in user1.Value){
				int item1Id = item1.ProductID;
				float item1Rating = item1.Score;
				hash_items.Add(item1.ProductID);

				foreach(var user2 in userRatings){
					foreach(var item2 in user2.Value){
						if(item2.ProductID <= itemId){
							continue;
						}
						int item2Id = item2.ProductID;
						float item2Rating = item2.Score;
						Rating ratingDiff;

						var key = Tools.GetKey(item1Id, item2Id);

						if(dic_Matrix.Keys.Contains(key)){
							ratingDiff = dic_Matrix[key];
						}else{
							ratingDiff = new Rating();
							dic_Matrix[key] = ratingDiff;
						}

						if(!ratingDiff.hash_user.Contains(user1.Key)){
							ratingDiff.Value += item1Rating - item2Rating;
							ratingDiff.Freq += 1;
						}

						ratingDiff.hash_user.Add(user.1Key);
					}
				}
			}
		}
	}


	public IDictionary<int, float> Predict(List<Product> userRatings){
		Dictionary<int, float> predictions = new Dictionary<int, float>();
		var ProductIDs = userRatings.Select(i => i.ProductID).ToList();
		foreach(var itemId in this.hash_items){
			if(ProductIDs.Contains(itemId)){
				continue;
			}

			Rating itemRating = new Rating();

			foreach(var userRating in userRatings){
				if(userRating.ProductID == itemId){
					continue;
				}
				int inputItemId = userRating.ProductID;
				var key = Tools.GetKey(itemId, inputItemId);
				if(dic_Matrix.Keys.Contains(key)){
					Rating diff = dic_Matrix[key];
					itemRating.Value += diff.Freq * (userRating.Score + diff.AverageValue * ((itemId < inputItemId) ? 1 : -1));
					itemRating.Freq += diff.Freq;
				}
			}
			predictions.Add(itemId, itemRating.AverageValue);
		}
		return predictions;
	}

}



public class Tools{
	public static string GetKey(int item1Id, int item2Id){
		return (item1Id < item2Id) ? item1Id + "->" + item2Id : item2Id + "->" + item1Id;
	}
}