// Enum untuk kondisi cuaca
enum WeatherCondition {
    Sunny = "Sunny",
    Rainy = "Rainy",
    Cloudy = "Cloudy",
    Stormy = "Stormy"
  }
  
  // Interface untuk objek laporan cuaca
  interface WeatherReport {
    id: number;
    cityName: string;
    condition: WeatherCondition;
  }
  
  // Fungsi untuk menampilkan kondisi cuaca
  function displayWeather(report: WeatherReport): void {
    console.log(`\n=== LAPORAN CUACA ===`);
    console.log(`ID: ${report.id}`);
    console.log(`Kota: ${report.cityName}`);
    console.log(`Kondisi: ${report.condition}`);
    console.log(`=====================\n`);
  }
  
  // Fungsi untuk mengubah kondisi cuaca
  function changeWeatherCondition(report: WeatherReport, newCondition: WeatherCondition): void {
    const oldCondition = report.condition;
    report.condition = newCondition;
    
    console.log(`🌤️ Perubahan cuaca di ${report.cityName}:`);
    console.log(`   ${oldCondition} → ${newCondition}`);
  }
  
  // Program utama
  function main(): void {
    console.log("🌍 APLIKASI CUACA SEDERHANA");
    console.log("============================");
    
    // Membuat objek weatherReport dengan kondisi awal Sunny
    const weatherReport: WeatherReport = {
      id: 1,
      cityName: "Banda Aceh",
      condition: WeatherCondition.Sunny
    };
    
    // Menampilkan kondisi cuaca awal
    console.log("📊 Kondisi Cuaca Awal:");
    displayWeather(weatherReport);
    
    // Simulasi perubahan cuaca dengan delay
    console.log("🔄 Simulasi Perubahan Cuaca:\n");
    
    // Perubahan 1: Sunny → Cloudy
    setTimeout(() => {
      changeWeatherCondition(weatherReport, WeatherCondition.Cloudy);
      displayWeather(weatherReport);
      
      // Perubahan 2: Cloudy → Rainy
      setTimeout(() => {
        changeWeatherCondition(weatherReport, WeatherCondition.Rainy);
        displayWeather(weatherReport);
        
      }, 2000);
      
    }, 2000);
  }
  
  // Menjalankan program
  main();