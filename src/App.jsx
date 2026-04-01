import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Phone, ExternalLink, Menu, ChevronRight, ArrowLeft } from 'lucide-react';

// 作品集数据 - 严格同步并保留您手动编辑的所有路径、结构与文字
const portfolioData = [
  {
    id: "01",
    category: "Civic & Public Spaces",
    title: "公共与公民空间",
    description: "Public facilities designed to encourage community interaction and connect with their surrounding context.",
    projects: [
      {
        id: 1,
        name: "Connect & Overlap",
        type: "Visitor Center",
        location: "Rodeo Lagoon, CA",
        studio: "B.Arch Studio 2",
        date: "2023 Spring",
        ratio: 2.2,
        description: "Acts as a spatial threshold between human habitation and the ecological environment, featuring spherical depressions for micro-habitats.",
        fullDescription: `This is a visitor center located in rodeo beach, one side facing the parking lot and the other side facing the mountain, it is the meeting point of two different environments, there are many spherical depressions on the walls and roofs for swallows to build their nests and grow plants, and the whole building is the overlap and coexistence of human space and ecological environment. `,
        imageUrl: "/assets/project1_main.jpg", 
        gallerySections: [
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project1_detail1.jpg", caption: "Site Plan" },
              { url: "/assets/project1_detail2.jpg", caption: "Plan Drawing" },
              { url: "/assets/project1_detail3.jpg", caption: "Elevation Drawing"},
              { url: "/assets/project1_detail4.jpg", caption: "Long Section Drawing"},
              { url: "/assets/project1_detail5.jpg", caption: "Short Section Drawing"}
            ]
          },
          {
            sectionTitle: "RENDER",
            images: [
              { url: "/assets/project1_render1.jpg", caption: "Render 1" },
              { url: "/assets/project1_render2.jpg", caption: "Render 2" },
              { url: "/assets/project1_render3.jpg", caption: "Render 3" }
            ]
          },
          {
            sectionTitle: "PHYSICAL MODEL",
            images: [
              { url: "/assets/project1_model1.jpg", caption: "Physical Model 1" },
              { url: "/assets/project1_model2.jpg", caption: "Physical Model 2" },
              { url: "/assets/project1_model3.jpg", caption: "Physical Model 3" },
              { url: "/assets/project1_model4.jpg", caption: "Physical Model 4" }
            ]
          }
        ],
        tags: ["Visitor Center", "Ecological Design"]
      },
      {
        id: 2,
        name: "Spiral Tri Library",
        type: "Public Library",
        location: "Dogpatch, Impark Lot 85",
        studio: "B.Arch Studio 3",
        date: "2023 Fall",
        ratio: 1.1,
        description: "An upward-spiraling stack of triangular volumes that creates contrasting interior and exterior voids, wrapped in a glazed facade featuring terraced gardens.",
        fullDescription: `Inspired by Preston Scott Cohen’s Cosmos Library, Spiral Tri Library retains the original characteristics of the Cosmos Library, i.e. the contrast between the interior void and the exterior void, interpreting the concept of the two voids in a different but similar way. The library as a whole is formed by stacking triangles in an upward rotating arrangement, thus creating a stepped interior void, while an area underneath the rotating building is formed as an exterior void.

The facade of the building is made up of many triangular pieces of glass, and the roof terrace of each floor is partially wrapped by this glass facade. There are small gardens in the area of the terrace, and green plants are planted along the glass facade for people to enjoy, which makes the roof terrace under the glass facade form a structure like a sunroom.`,
        imageUrl: "/assets/project2_main.jpg",
        gallerySections: [
          {
            sectionTitle: "DIAGRAMS",
            images: [
              { url: "/assets/project2_Diagram1.jpg", caption: "Program Diagram" },
              { url: "/assets/project2_Diagram2.jpg", caption: "Circulation Diagram" },
              { url: "/assets/project2_Diagram3.jpg", caption: "Void Diagram"}
            ]
          },
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project2_detail1.jpg", caption: "Ground Floor Plan" },
              { url: "/assets/project2_detail2.jpg", caption: "Second Floor Plan" },
              { url: "/assets/project2_detail3.jpg", caption: "Terrace Plan" },
              { url: "/assets/project2_detail4.jpg", caption: "All Floor Plans" },
              { url: "/assets/project2_detail5.jpg", caption: "Atmospheric Section" }
            ]
          },
          {
            sectionTitle: "RENDER",
            images: [
              { url: "/assets/project2_render1.jpg", caption: "Render 1" },
              { url: "/assets/project2_render2.jpg", caption: "Render 2" }
            ]
          }
        ],
        tags: ["Library", "Urban Hub"]
      }
    ]
  },
  {
    id: "02",
    category: "Housing & Community",
    title: "居住与社区",
    description: "Residential projects focused on shared living, multi-generational care, and urban community building.",
    projects: [
      {
        id: 3,
        name: "Green Alley",
        type: "Residential",
        location: "Portola Greenhouses, SF, CA", 
        studio: "B.Arch Studio 4",
        date: "2024 Spring",
        ratio: 1.5,
        description: "Inspired by traditional Chinese alleyways, this mass timber residential project features a central communal path to foster neighborly interaction.",
        fullDescription: `Inspired by the Shanghai Longtang—a traditional high-density lane housing typology—’Green Alley’ reinterprets this unique social fabric. ‘Long’ refers to the alleyway, while ‘Tang’ implies a communal hall or gathering space, symbolizing a tight-knit community lifestyle.

The design carves a central circulation spine between two residential volumes. This pathway serves a dual function: acting as a public link to community amenities while providing a private transitional sequence for residents.`,
        imageUrl: "/assets/project3_main.jpg",
        gallerySections: [
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project3_detail1.jpg", caption: "Communal Space Plan" }
            ]
          }
        ],
        tags: ["Shared Living", "Urban Renewal"]
      },
      {
        id: 4,
        name: "Intersection Point",
        type: "Day Care",
        location: "Chinatown, SF, CA",
        studio: "Architecture of Care",
        date: "2025 Spring",
        ratio: 0.85,
        description: "Replaces solid internal walls with grid-aligned furniture partitions to ensure visual continuity and create serene gathering nodes.",
        fullDescription: `Driven by the concept of “Intersection Points,” this design utilizes a tiled grid to maximize spatial nodes and eliminate visual confinement. The macro program follows a checkerboard layout, while internally, solid walls are replaced by grid-aligned furniture partitions to ensure absolute visual continuity. The intersections physically manifest as transparent, glass-enclosed pavilions bridging the rooms. Furnished with seating and greenery, these nodes provide elders and children with serene, unconfined resting spaces featuring continuous views.`,
        imageUrl: "/assets/project4_main.jpg",
        gallerySections: [
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project4_detail1.jpg", caption: "Grid Logic & Plan" }
            ]
          }
        ],
        tags: ["Multi-generational", "Care"]
      }
    ]
  },
  {
    id: "03",
    category: "Digital Fabrication",
    title: "数字建造",
    description: "Bridging digital design with physical construction through parametric modeling and structural prototypes.",
    projects: [
      {
        id: 5,
        name: "Hanging Canopy Pavilion",
        type: "Parametric Prototype",
        location: "Context-independent",
        studio: "tranSTUDIO",
        date: "2024 Fall",
        ratio: 1.4,
        description: "Inspired by kinetic mechanisms, utilizing a custom central joint to articulate rotational columns governed by a bespoke folding canopy.",
        fullDescription: `The main deformed part and shape is inspired by a hanger called “Sciangai”, which can be opened or closed by rotating the columns. I used a joint similar to the center of the hanger to connect the eight columns of the pavilion, and the opening angle is determined by a special folding pattern at the top. 

The material of the column is bamboo, which is light, portable and easy to obtain. This pattern allows it to remain closed while unfolding, thus preventing the water collected at the bottom from evaporating and losing. A plastic cylinder with a gradually decreasing diameter extends downward from the center of the top. As air passes through, the water vapor in the air condenses into water on the cylinder and flows downward along the cylinder under gravity.`,
        imageUrl: "/assets/project5_main.jpg",
        gallerySections: [
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project5_detail1.jpg", caption: "Fabrication Diagram" }
            ]
          }
        ],
        tags: ["Parametric", "Pavilion"]
      },
      {
        id: 6,
        name: "Sliding House",
        type: "Kinetic Architecture",
        location: "Fabrication Studies",
        studio: "tranSTUDIO",
        date: "2024 Fall",
        ratio: 1.4,
        description: "A micro-home study relying on a lateral sliding mechanism. Exploring dynamic expansion and contraction of living spaces.",
        fullDescription: `A research project on kinetic living spaces, focusing on a lateral sliding mechanism that allows the structure to adapt to different programmatic needs throughout the day.`,
        imageUrl: "/assets/project6_main.jpg",
        gallerySections: [
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project6_detail1.jpg", caption: "Mechanical Movement Diagram" }
            ]
          }
        ],
        tags: ["Kinetic", "Residential"]
      },
      {
        id: 8,
        name: "Whisper Archway",
        type: "Acoustic Prototype",
        location: "Digital Fabrication Lab",
        studio: "tranSTUDIO",
        date: "2024 Fall",
        ratio: 1.6,
        description: "An experimental archway exploring the intersection of structural geometry and acoustic amplification through parametric timber patterns.",
        fullDescription: `Whisper Archway is an exploration of how digital fabrication and geometric complexity can influence acoustic environments. The structure utilizes a series of interlocking panels designed to capture and amplify ambient sound, creating a localized 'whisper' effect for users passing through the threshold.`,
        imageUrl: "/assets/project8_main.jpg",
        gallerySections: [
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project8_drawing1.jpg", caption: "Geometric Logic" }
            ]
          }
        ],
        tags: ["Acoustic", "Parametric", "Timber"]
      }
    ]
  },
  {
    id: "04",
    category: "Other Work",
    title: "其他探索",
    description: "Hands-on explorations of different fabrication techniques.",
    projects: [
      {
        id: 10,
        name: "Laser Cut",
        type: "Digital Media",
        location: "Studio Works",
        studio: "Design Media 3",
        date: "2023",
        ratio: 1.5,
        description: "Exploration of optical color mixing through multi-layered acrylic laser cutting.",
        fullDescription: `Researching optical color mixing through laser-cut acrylic geometries. My experiments focused on how overlapping layers of semi-transparent acrylic can create new visual depths and color shifts when viewed from different angles.`,
        imageUrl: "/assets/other1.jpg",
        gallerySections: [{ sectionTitle: "STUDIES", images: [{ url: "/assets/other1_detail.jpg", caption: "Acrylic Study" }] }],
        tags: ["Laser Cut"]
      },
      {
        id: 11,
        name: "CNC & Slip Casting",
        type: "Digital Media",
        location: "Studio Works",
        studio: "Design Media 3",
        date: "2024",
        ratio: 1.5,
        description: "Using CNC milled molds for mass production of ceramic modular systems.",
        fullDescription: `Exploring the transition from CNC milling to traditional ceramic slip casting. The project involved creating a digital prototype of a modular tile, milling the negative mold using a CNC router, and then using that mold for repetitive ceramic casting.`,
        imageUrl: "/assets/other2.jpg",
        gallerySections: [{ sectionTitle: "PROCESS", images: [{ url: "/assets/other2_detail.jpg", caption: "CNC Mold" }] }],
        tags: ["CNC", "Casting"]
      },
      {
        id: 12,
        name: "3D Print",
        type: "Digital Media",
        location: "Studio Works",
        studio: "Design Media 3",
        date: "2024",
        ratio: 1.5,
        description: "Testing connection tolerances for kinetic structures using high-precision 3D printing.",
        fullDescription: `Investigating structural tolerances through iterative 3D printing. The research aimed to identify the minimum clearance required for functional mechanical joints in complex assembled kinetic structures.`,
        imageUrl: "/assets/other3.jpg",
        gallerySections: [{ sectionTitle: "PROTOTYPES", images: [{ url: "/assets/other3_detail.jpg", caption: "Connection Test" }] }],
        tags: ["3D Print"]
      }
    ]
  }
];

const AlignedText = ({ text, className }) => {
  if (!text) return null;
  return (
    <div className={`flex justify-between w-full select-none ${className}`}>
      {text.split('').map((char, index) => (
        <span key={index} className="inline-block">{char === ' ' ? '\u00A0' : char}</span>
      ))}
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectClick = (project) => {
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = (sectionId = 'hero') => {
    setActiveProject(null);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 50);
  };

  if (activeProject) {
    return (
      <div className="min-h-screen bg-white text-[#1C1C1C] font-sans selection:bg-[#1C1C1C] selection:text-white antialiased animate-in fade-in duration-700">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl py-6 border-b border-[#1C1C1C]/10">
          <div className="container mx-auto px-8 md:px-16 flex justify-between items-center">
            <button onClick={() => handleBackToHome('work')} className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C] hover:text-[#1C1C1C]/60 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </button>
            <div className="hidden md:flex space-x-12 text-[11px] tracking-[0.2em] font-bold uppercase text-[#1C1C1C]/60">
              <button onClick={() => handleBackToHome('hero')} className="hover:text-[#1C1C1C] transition-colors">Home</button>
              <button onClick={() => handleBackToHome('work')} className="hover:text-[#1C1C1C] transition-colors">Projects</button>
              <button onClick={() => handleBackToHome('about')} className="hover:text-[#1C1C1C] transition-colors">About</button>
              <button onClick={() => handleBackToHome('contact')} className="hover:text-[#1C1C1C] transition-colors">Contact</button>
            </div>
            <Menu className="md:hidden w-6 h-6 text-[#1C1C1C]" />
          </div>
        </nav>

        <div className="container mx-auto px-8 md:px-16 py-24 md:py-32 mt-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-4 space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4">{activeProject.name}</h1>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/60">{activeProject.type}</p>
              </div>
              <div className="space-y-6 pt-8 border-t border-[#1C1C1C]/10">
                <div><h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-1">Location</h4><p className="text-sm font-medium">{activeProject.location}</p></div>
                {activeProject.studio && (<div><h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-1">Studio</h4><p className="text-sm font-medium">{activeProject.studio}</p></div>)}
                {activeProject.date && (<div><h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-1">Date</h4><p className="text-sm font-medium">{activeProject.date}</p></div>)}
              </div>
            </div>

            <div className="md:col-span-8">
              <h3 className="text-[18px] md:text-[22px] font-bold tracking-[0.5em] uppercase text-[#1C1C1C]/50 mb-10">Concept & Overview</h3>
              <p className="text-base md:text-lg leading-loose text-[#1C1C1C]/80 font-light mb-32 text-justify whitespace-pre-line">{activeProject.fullDescription}</p>
              
              {activeProject.gallerySections?.map((section, sIndex) => (
                <div key={sIndex} className="mt-24 pt-16 border-t border-[#1C1C1C]/10 first:mt-0 first:pt-0 first:border-t-0">
                  <h3 className="text-[18px] md:text-[22px] font-bold tracking-[0.5em] uppercase text-[#1C1C1C]/50 mb-12">{section.sectionTitle}</h3>
                  <div className="space-y-16">
                    {section.images?.map((imgObj, index) => (
                      <div key={index} className="group/drawing">
                        <div className="w-full bg-[#EAE8E3] mb-4 overflow-hidden border border-[#1C1C1C]/5">
                          <img 
                            src={imgObj.url} 
                            alt={imgObj.caption || "Project Image"} 
                            className="w-full h-auto block" 
                            onError={(e) => { e.target.src = "https://placehold.co/1200x800?text=Project+Detail"; }} 
                          />
                        </div>
                        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40">
                          {imgObj.caption || `${section.sectionTitle} ${index + 1}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-48 pt-16 border-t border-[#1C1C1C]/10 text-center">
                 <button onClick={() => handleBackToHome('work')} className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-black tracking-tighter uppercase text-[#1C1C1C]/20 hover:text-[#1C1C1C] transition-colors">
                   <ArrowLeft className="w-8 h-8 md:w-12 md:h-12 group-hover:-translate-x-4 transition-transform" /> Return to Projects
                 </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="py-8 border-t border-[#1C1C1C]/10 text-center text-[10px] font-bold tracking-[0.3em] uppercase text-[#1C1C1C]/40">© {new Date().getFullYear()} Liwen Shao.</footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1C1C1C] font-sans selection:bg-[#1C1C1C] selection:text-white antialiased animate-in fade-in duration-700 relative overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-[#1C1C1C]/10 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-8 md:px-16 flex justify-end items-center">
          <div className="hidden md:flex space-x-12 text-[11px] tracking-[0.2em] font-bold uppercase text-[#1C1C1C]/60">
            <button onClick={() => scrollToSection('hero')} className="hover:text-[#1C1C1C] transition-colors">Home</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-[#1C1C1C] transition-colors">Projects</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#1C1C1C] transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#1C1C1C] transition-colors">Contact</button>
          </div>
          <Menu className="md:hidden w-6 h-6 text-[#1C1C1C]" />
        </div>
      </nav>

      <section id="hero" className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-16">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="relative z-20 space-y-12 md:space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 w-full max-w-[1000px] mx-auto">
          <div className="w-full flex flex-col gap-8 md:gap-14">
            <AlignedText text="ARCHITECTURE" className="text-[7.2vw] md:text-[6.5vw] font-black leading-none tracking-normal" />
            <AlignedText text="PORTFOLIO" className="text-[9.8vw] md:text-[8.8vw] font-black leading-none tracking-normal" />
          </div>
          <div className="flex flex-col items-center w-full relative">
            <div className="w-full flex justify-center mb-12 relative">
               <div className="absolute left-0 right-0 top-1/2 h-px bg-[#1C1C1C]/10"></div>
               <div className="relative z-50 bg-white px-8 cursor-pointer group" onClick={() => scrollToSection('work')}>
                 <ArrowDown className="w-5 h-5 text-[#1C1C1C]/30 group-hover:text-[#1C1C1C] transition-colors animate-bounce" />
               </div>
            </div>
            <p className="w-full whitespace-nowrap text-[2.8vw] sm:text-[2vw] md:text-[0.9vw] lg:text-[11px] text-[#1C1C1C]/40 tracking-[0.45em] font-bold uppercase text-center relative z-20">Architecture Portfolio Selected Works 2023–2025</p>
          </div>
        </div>
      </section>

      <section id="work" className="py-32 md:py-48 bg-white relative z-10">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#1C1C1C]/10 pb-12 relative">
            <div><h2 className="text-5xl md:text-6xl font-black text-[#1C1C1C] tracking-tighter mb-4">Projects</h2></div>
            <div className="text-[#1C1C1C] text-6xl md:text-7xl font-black opacity-5 hidden md:block tracking-tighter">01 — 04</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-48">
            {portfolioData.map((cat) => (
              <div 
                key={cat.id} 
                className="flex flex-col border-l border-[#1C1C1C] pl-6 py-2 group cursor-pointer min-h-[360px]"
                onClick={() => scrollToSection(`section-${cat.id}`)}
              >
                <span className="text-6xl font-black text-[#1C1C1C] tracking-tighter mb-40 group-hover:translate-x-2 transition-transform duration-500">
                  {cat.id}
                </span>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-4 group-hover:text-[#1C1C1C]/60 transition-colors">
                  {cat.category}
                </h3>
                <p className="text-[10px] text-[#1C1C1C]/50 leading-relaxed tracking-widest font-medium italic mt-auto">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-48 md:space-y-64">
            {portfolioData?.map((cat, idx) => (
              <div key={idx} className="group" id={`section-${cat.id}`}>
                <div className="flex items-center gap-6 mb-16 overflow-hidden">
                  <span className="text-5xl md:text-7xl font-black text-[#1C1C1C]/20 group-hover:text-[#1C1C1C]/40 transition-colors duration-500 tracking-tighter">{cat.id}</span>
                  <div className="h-px flex-grow bg-[#1C1C1C]/10 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#1C1C1C]/20 rounded-full"></div>
                  </div>
                  <h3 className="text-[11px] md:text-xs tracking-[0.4em] font-bold uppercase text-[#1C1C1C]/60 whitespace-nowrap">{cat.category}</h3>
                </div>

                <div className="space-y-32">
                  {Array.from({ length: Math.ceil(cat.projects.length / 2) }).map((_, rowIndex) => {
                    const rowProjects = cat.projects.slice(rowIndex * 2, rowIndex * 2 + 2);
                    const isFullRow = rowProjects.length === 2;

                    return (
                      <div key={rowIndex} className={`flex gap-x-12 md:gap-x-16 items-start w-full overflow-hidden ${isFullRow ? '' : 'justify-start'}`}>
                        {rowProjects.map((project) => (
                          <div 
                            key={project.id} 
                            className="group/item relative flex flex-col cursor-pointer"
                            // 关键：通过 ratio 实现两端出齐且无缝等高
                            style={isFullRow ? { flex: project.ratio || 1 } : { width: 'auto', maxWidth: '48%' }} 
                            onClick={() => handleProjectClick(project)}
                          >
                            {/* 修改：移除了 border 和 bg-white，确保图片间无线条干扰 */}
                            <div className={`relative overflow-hidden mb-8 h-[280px] md:h-[400px] lg:h-[480px] ${isFullRow ? 'w-full' : 'w-fit'}`}>
                              <img 
                                src={project.imageUrl} 
                                alt={project.name} 
                                // 修改：使用 w-full h-full object-cover，配合精准的 ratio 即可实现无删减填充
                                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 ease-out group-hover/item:scale-[1.02] group-hover/item:grayscale-0 group-hover/item:opacity-100" 
                                onError={(e) => { e.target.src = "https://placehold.co/1200x800?text=Architecture+Project"; }}
                              />
                              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover/item:opacity-100 transition-all duration-500 translate-y-4 group-hover/item:translate-y-0">
                                <button className="bg-[#1C1C1C] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                                   Read More <ArrowDown className="w-4 h-4 -rotate-90" />
                                </button>
                              </div>
                            </div>
                            
                            <div className="space-y-4 flex flex-col flex-grow w-full">
                              <h4 className="text-3xl md:text-4xl font-black text-[#1C1C1C] tracking-tighter group-hover/item:text-[#1C1C1C]/70 transition-colors leading-[1.1]">{project.name}</h4>
                              <p className="text-[#1C1C1C]/60 text-sm leading-relaxed mb-6">{project.description}</p>
                              
                              <div className="mt-auto pt-4 flex items-center justify-end text-[10px] font-bold text-[#1C1C1C]/40 tracking-[0.2em] uppercase border-t border-[#1C1C1C]/10">
                                <span className="group-hover/item:text-[#1C1C1C] transition-colors underline decoration-1 underline-offset-4">Details</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 md:py-48 bg-white relative border-y border-[#1C1C1C]/5 z-10">
        <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-white overflow-hidden grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100">
               <img src="https://images.unsplash.com/photo-1507346101323-86d199a6c53b?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r-2 border-b-2 border-[#1C1C1C]/10 pointer-events-none group-hover:border-[#1C1C1C]/30 transition-colors duration-700"></div>
          </div>
          <div className="space-y-10">
            <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#1C1C1C]/40">The Architect</h3>
            <h2 className="text-5xl md:text-7xl font-black text-[#1C1C1C] tracking-tighter leading-none whitespace-nowrap">LIWEN SHAO <br/><span className="text-3xl md:text-5xl text-[#1C1C1C]/20 uppercase">Digital Designer</span></h2>
            <div className="space-y-6 text-[15px] md:text-lg text-[#1C1C1C]/70 font-serif leading-relaxed">
              <p>我致力于创造连接社区、融合环境与数字工艺的空间。我的设计路径从 Rodeo Lagoon 的生态触角延伸至 Dogpatch 的城市脉络，再到实验室里的数字微观建造。</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#1C1C1C]/10 mt-8 font-sans">
                <div><span className="block text-[#1C1C1C] font-black tracking-tight mb-1 text-lg">Education</span><span className="text-[13px] text-[#1C1C1C]/60 font-medium tracking-wider uppercase">B. Arch (Ongoing)</span></div>
                <div><span className="block text-[#1C1C1C] font-black tracking-tight mb-1 text-lg">Focus</span><span className="text-[13px] text-[#1C1C1C]/60 font-medium tracking-wider uppercase">Ecological / Fabrication</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 md:py-48 bg-white relative overflow-hidden z-10">
        <div className="container mx-auto px-8 md:px-16 text-center relative z-10">
          <h2 className="text-7xl md:text-[14rem] font-black text-[#1C1C1C]/5 tracking-tighter mb-12 select-none pointer-events-none">CONNECT</h2>
          <div className="max-w-3xl mx-auto bg-white border border-[#1C1C1C]/10 p-12 md:p-20 shadow-sm relative -mt-24 md:-mt-48 z-20">
            <p className="text-lg md:text-xl text-[#1C1C1C]/70 font-serif mb-12">如果您对我的作品感兴趣，或者有合作意向，欢迎随时联系我。</p>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <a href="mailto:liwenshao1018@gmail.com" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center group-hover:bg-[#1C1C1C] group-hover:text-white transition-all duration-500 text-[#1C1C1C]"><Mail className="w-6 h-6" /></div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#1C1C1C]/60 group-hover:text-[#1C1C1C] transition-colors uppercase">liwenshao1018@gmail.com</span>
              </a>
              <a href="tel:+16282589330" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center group-hover:bg-[#1C1C1C] group-hover:text-white transition-all duration-500 text-[#1C1C1C]"><Phone className="w-6 h-6" /></div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#1C1C1C]/60 group-hover:text-[#1C1C1C] transition-colors uppercase">+1 628-258-9330</span>
              </a>
            </div>
          </div>
          <footer className="mt-32 pt-12 border-t border-[#1C1C1C]/10 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-[#1C1C1C]/40 gap-8">
            <p>© {new Date().getFullYear()} Liwen Shao. All rights reserved.</p>
            <p>San Francisco / Architecture & Design</p>
          </footer>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
        body { cursor: crosshair; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: white; }
        ::-webkit-scrollbar-thumb { background: #D1D0CB; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #A9A8A3; }
        html { scroll-behavior: smooth; }
        .animate-bounce { animation: bounce 1s infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); } 50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); } }
      `}} />
    </div>
  );
}

export default App;