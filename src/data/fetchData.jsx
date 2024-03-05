
const fetchData = async () => {
    try {
      const response = await fetch('./data.js');
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export default fetchData;
  