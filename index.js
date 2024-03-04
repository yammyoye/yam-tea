class YamTea {
    constructor() {
      this.teaData = {};
    }
  
    setTeaData(key, value) {
      this.teaData[key] = value;
      console.log(`Set Yam Tea data for key '${key}':`, value);
    }
  
    getTeaData(key) {
      const value = this.teaData[key];
      console.log(`Retrieved Yam Tea data for key '${key}':`, value);
      return value;
    }
  
    brewTea() {
      console.log('Brewing a unique cup of Yam Tea. ☕🍠');
    }
  
    customizeBlend(blend) {
      console.log(`Customizing Yam Tea blend with ${blend}.`);
    }
  
    addSpecialIngredient(ingredient) {
      console.log(`Adding a special touch of ${ingredient} to enhance the flavor of Yam Tea.`);
    }
  
    enjoyTea() {
      console.log('Sipping on the distinctive flavor of Yam Tea. 🌟🍵');
    }
  }
  
  // Example usage:
  const yamTea = new YamTea();
  
  yamTea.setTeaData('flavor', 'Savory Surprise');
  yamTea.setTeaData('aroma', 'Earthy Essence');
  yamTea.brewTea();
  yamTea.customizeBlend('Cinnamon Spice');
  yamTea.addSpecialIngredient('Honeyed Yam');
  yamTea.enjoyTea();
  