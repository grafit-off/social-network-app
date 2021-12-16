export const objectHelper = (items, itemId, propsKey, newObj) => {
	return items.map((user) => {
		if (user[propsKey] === itemId) {
			return {
				...user,
				...newObj
			}
		}
		return user;
	})
}