export default async function loadfile(path){
		let response = await fetch(path);
		
		if (!response.ok){
			throw new Error(`Algo anda mal, tal vez sea el directorio ${path}`);
		}
		
		return await response.text();
};
