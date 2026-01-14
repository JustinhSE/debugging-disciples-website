'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const africanCountries = [
  'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 
  'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 
  'Democratic Republic of the Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 
  'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 
  'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 
  'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 
  'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 
  'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Swaziland', 
  'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe', 'Eswatini', 
  'Côte d\'Ivoire', 'Rep. of the Congo', 'Dem. Rep. Congo', 'W. Sahara', 
  'Western Sahara', 'United Republic of Tanzania', 'eSwatini', 'Somaliland'
];

const MapSection = () => {
  const members = [
    { name: 'Canada', coordinates: [-106.35, 56.13], icon: '🍁', count: '45+', color: '#06b6d4' },
    { name: 'USA', coordinates: [-95.7129, 37.0902], icon: '🇺🇸', count: '45+', color: '#06b6d4' },
    { name: 'Africa', coordinates: [22.9375, -8.7832], icon: '🌍', count: '35+', color: '#3b82f6' },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-darker"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              Global Community
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our brotherhood spans across continents with members in North America, Africa, and beyond. 
            <br /> No matter where you are, you're part of our worldwide network of Christian technologists.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <ComposableMap projection="geoMercator">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;
                  const isCanada = countryName === 'Canada';
                  const isUSA = countryName === 'United States of America' || countryName === 'United States';
                  const isAfrica = africanCountries.includes(countryName);
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: isCanada || isUSA 
                            ? 'rgba(6, 182, 212, 0.2)' 
                            : isAfrica 
                            ? 'rgba(59, 130, 246, 0.2)' 
                            : 'rgba(6, 182, 212, 0.05)',
                          stroke: isCanada || isUSA 
                            ? 'rgba(6, 182, 212, 0.5)' 
                            : isAfrica 
                            ? 'rgba(59, 130, 246, 0.5)' 
                            : 'rgba(6, 182, 212, 0.15)',
                          strokeWidth: isCanada || isUSA || isAfrica ? 1.5 : 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: isCanada || isUSA 
                            ? 'rgba(6, 182, 212, 0.3)' 
                            : isAfrica 
                            ? 'rgba(59, 130, 246, 0.3)' 
                            : 'rgba(6, 182, 212, 0.1)',
                          stroke: isCanada || isUSA 
                            ? 'rgba(6, 182, 212, 0.7)' 
                            : isAfrica 
                            ? 'rgba(59, 130, 246, 0.7)' 
                            : 'rgba(6, 182, 212, 0.25)',
                          strokeWidth: isCanada || isUSA || isAfrica ? 2 : 0.75,
                          outline: 'none',
                          cursor: 'pointer',
                        },
                        pressed: {
                          fill: isCanada || isUSA 
                            ? 'rgba(6, 182, 212, 0.4)' 
                            : isAfrica 
                            ? 'rgba(59, 130, 246, 0.4)' 
                            : 'rgba(139, 92, 246, 0.1)',
                          stroke: isCanada || isUSA 
                            ? 'rgba(6, 182, 212, 0.8)' 
                            : isAfrica 
                            ? 'rgba(59, 130, 246, 0.8)' 
                            : 'rgba(139, 92, 246, 0.3)',
                          strokeWidth: isCanada || isUSA || isAfrica ? 2 : 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {members.map((member) => (
              <Marker key={member.name} coordinates={member.coordinates}>
                <g>
                  <circle
                    cx={0}
                    cy={0}
                    r={8}
                    fill={member.color}
                    opacity="0.8"
                  />
                  <circle
                    cx={0}
                    cy={0}
                    r={12}
                    fill={member.color}
                    opacity="0.2"
                  />
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-br from-tech-accent/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-tech-accent/20">
            <div className="text-3xl mb-3">🍁</div>
            <h3 className="text-xl font-bold text-white mb-2">North America</h3>
            <p className="text-gray-300">45+ members across Canada and the United States with regular meetups and study groups.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-400/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-bold text-white mb-2">Africa</h3>
            <p className="text-gray-300">35+ growing network of believers across multiple African nations, sharing faith and technical excellence.</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-400/10 to-tech-accent/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-xl font-bold text-white mb-2">Connected Globally</h3>
            <p className="text-gray-300">150+ members worldwide bound by faith and technology, supporting each other across time zones and continents.</p>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default MapSection;
