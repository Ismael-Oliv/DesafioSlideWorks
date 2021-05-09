export interface IFormData {
	name: string;
	email: string;
	content: string;
	dropdown: string;
}

export interface IOpitions {
	[index: string]: boolean;
}

// "/1/cards?key=e793b331b6b1dc8dbc432d225bb35ef4&token=c35758a3e5803c3fa797597a8a7d4bad400867c2d0b1e3bcfc25ad0b95cc66fb&idList=6095ac267228ba501e1c2ba1&name=newCardName`"

export interface Icards {
	id: string;
	idBoard: string;
	idList: string;
}

export interface IChecklist {
	id: string;
	idCard: string;
	idBoard: string;
	name: string;
}

export interface ITags {
	[index: string]: boolean;
}
