import React, { useState, useEffect, useRef } from 'react';
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
              { url: "/assets/project1_detail2.jpg", caption: "Floor Plan" },
              { url: "/assets/project1_detail3.jpg", caption: "Elevation"},
              { url: "/assets/project1_detail4.jpg", caption: "Long Section"},
              { url: "/assets/project1_detail5.jpg", caption: "Short Section"}
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
        location: "Impark Lot 85, Dogpatch, SF, CA",
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
        fullDescription: `The main inspiration for the design of “Green Alley” comes from “弄堂” (Longtang), a typical form of traditional residential area in Shanghai, China. It usually refers to a narrow alleyway flanked by closely packed residences. In the Shanghai dialect, “弄” means alley, and “堂” conveys a sense of living community or neighborhood. Therefore,“Longtang” not only signifies a geographical location but also represents a community lifestyle, as well as the interactions and way of life among its residents. 

As the building itself is in the middle of the site, not at the corner, the building continues the basic concept of the alley, creating a pathway sandwiched between two residential buildings to lead passersby through the neighborhood to the adjacent Common Space and to lead residents back to their own units, with the residential buildings on both sides of the pathway being residential zones stacked on top of each other in different units. Formally, the conceptual structure of the alleyway fits the idea of the alleyway, and the two compact living areas are in line with the close connection between the residents expressed in the alleyway.`,
        imageUrl: "/assets/project3_main.jpg",
        gallerySections: [
          {
            sectionTitle: "DIAGRAMS",
            images: [
              { url: "/assets/project3_Diagram1.jpg", caption: "Massing Diagram" },
              { url: "/assets/project3_Diagram2.jpg", caption: "Configuration Diagram" },
              { url: "/assets/project3_Diagram3.jpg", caption: "Form Morphology Diagram"},
              { url: "/assets/project3_Diagram4.jpg", caption: "Circulation Diagram"},
              { url: "/assets/project3_Diagram5.jpg", caption: "Structure Diagram & Wall Section"}
            ]
          },
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project3_detail1.jpg", caption: "All Units Plans" },
              { url: "/assets/project3_detail2.jpg", caption: "First Floor Plan (Typical)" },
              { url: "/assets/project3_detail3.jpg", caption: "All Floor Plans" },
              { url: "/assets/project3_detail4.jpg", caption: "Site Plan" },
              { url: "/assets/project3_detail5.jpg", caption: "Long Section" },
              { url: "/assets/project3_detail6.jpg", caption: "Short Section" },
              { url: "/assets/project3_detail7.jpg", caption: "Long Elevation" },
              { url: "/assets/project3_detail8.jpg", caption: "Short Elevation" }
            ]
          },
          {
            sectionTitle: "RENDER",
            images: [
              { url: "/assets/project3_render1.jpg", caption: "Render 1" },
              { url: "/assets/project3_render2.jpg", caption: "Render 2" }
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
        studio: "B.Arch Advanced Studio--ARCHITECTURE OF CARE",
        date: "2025 Spring",
        ratio: 0.85,
        description: "Utilizes a tiled grid layout and transparent glass pavilions to maximize spatial nodes, ensuring absolute visual continuity and unconfined resting spaces for multi-generational users.",
        fullDescription: `Driven by the concept of “Intersection Points,” this design utilizes a tiled grid to maximize spatial nodes and eliminate visual confinement. The macro program follows a checkerboard layout, while internally, solid walls are replaced by grid-aligned furniture partitions to ensure absolute visual continuity. 

The intersections physically manifest as transparent, glass-enclosed pavilions bridging the rooms. Furnished with seating and greenery, these nodes provide elders and children with serene, unconfined resting spaces featuring continuous views.`,
        imageUrl: "/assets/project4_main.jpg",
        gallerySections: [
          {
            sectionTitle: "DIAGRAMS",
            images: [
              { url: "/assets/project4_Diagram1.jpg", caption: "Concept Diagram" }
            ]
          },
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project4_detail1.jpg", caption: "Site Plan" },
              { url: "/assets/project4_detail2.jpg", caption: "First Floor Plan" },
              { url: "/assets/project4_detail3.jpg", caption: "Second Floor Plan" },
              { url: "/assets/project4_detail4.jpg", caption: "Long Section" },
              { url: "/assets/project4_detail5.jpg", caption: "Short Section" },
              { url: "/assets/project4_detail6.jpg", caption: "Elevation" }
            ]
          },
          {
            sectionTitle: "RENDER",
            images: [
              { url: "/assets/project4_render1.jpg", caption: "Render 1" },
              { url: "/assets/project4_render2.jpg", caption: "Render 2" }
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
        type: "Pavilion / Kinetic Structure",
        location: "Context-independent",
        studio: "B.Arch Advanced Studio--tranSTUDIO 2024: Adaptive Thoughts, Design and Fabrication",
        date: "2024 Fall",
        ratio: 1.4,
        description: "This kinetic bamboo pavilion uses an unfolding eight-column structure, a protective canopy, and a central condensing cylinder to passively harvest and minimize the evaporation of atmospheric water.",
        fullDescription: `The main deformed part and shape is inspired by a hanger called “Sciangai”, which can be opened or closed by rotating the columns. I used a joint similar to the center of the hanger to connect the eight columns of the pavilion, and the opening angle is determined by a special folding pattern at the top. 

The material of the column is bamboo, which is light, portable and easy to obtain. This pattern allows it to remain closed while unfolding, thus preventing the water collected at the bottom from evaporating and losing. A plastic cylinder with a gradually decreasing diameter extends downward from the center of the top. As air passes through, the water vapor in the air condenses into water on the cylinder and flows downward along the cylinder under gravity.`,
        imageUrl: "/assets/project5_main.jpg",
        gallerySections: [
          {
            sectionTitle: "ASSEMBLY",
            images: [
              { url: "/assets/project5_Assembly1.jpg", caption: "Assembly Diagram" }
            ]
          },
          {
            sectionTitle: "FOLD PATTERN",
            images: [
              { 
                description: "This fold pattern was originally designed for NASA structures. In this pavilion, it ensures that the surface remains closed when unfolded or folded, thereby preventing the water collected at the bottom from evaporating and being lost.",
                url: "/assets/project5_formula1.jpg", 
                caption: "Formula For the Angle Calculation"
              },
              { url: "/assets/project5_Fold Pattern1.gif", caption: "Fold Pattern Diagram--(∠A= 180/8= 22.5°)" },
              { url: "/assets/project5_Fold Pattern2.gif", caption: "Roof Transformation Diagram" }
            ]
          },
          {
            sectionTitle: "COLUMNS",
            images: [
              { 
                description: "This is the supporting structure of the entire pavilion, inspired by the shape of the Sciangai hanger designed by De Pas, D’Urbino, and Lomazzi. Each column supports the entire pavilion around the gear-shaped joint.",
                url: "/assets/project5_example.jpg", 
                caption: "Sciangai--De Pas, D'Urbino, Lomazzi"
              },
              { url: "/assets/project5_Column1.gif", caption: "Column Transformation Diagram" }
            ]
          },
          {
            sectionTitle: "CONNECTION",
            images: [
              { 
                description: "Due to the special nature of the top fold pattern, when this structure folds, the eight corners that were originally on the same horizontal plane will gradually move away in the form of two squares. Therefore, to allow all eight columns to be connected to the top fold pattern, the connection points will be at the midpoints of the eight sides of the fold pattern. Because the movement of the column and the movement of the fold pattern are both one-direction movements, the connection point that satisfies the movement trajectories of the two is a universal joint, which can move in two directions.",
                url: "/assets/project5_Connection1.gif", 
                caption: "Universal Joint"
              }
            ]
          },
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project5_detail1.jpg", caption: "Elevation Drawing (Material)" },
              { url: "/assets/project5_detail2.jpg", caption: "Section Drawing (Function)" }
            ]
          },
          {
            sectionTitle: "RENDER",
            images: [
              { url: "/assets/project5_render1.jpg", caption: "Render 1" },
              { url: "/assets/project5_render2.jpg", caption: "Render 2" },
              { url: "/assets/project5_render3.jpg", caption: "Render 3" }
            ]
          },
          {
            sectionTitle: "PHYSICAL MODEL",
            images: [
              { url: "/assets/project5_Model1.jpg", caption: "Render 1" },
              { url: "/assets/project5_Model2.jpg", caption: "Render 2" }
            ]
          }
        ],
        tags: ["Parametric", "Pavilion"]
      },
      {
        id: 6,
        name: "Sliding House",
        type: "Kinetic Architecture",
        location: "Context-independent",
        studio: "B.Arch Advanced Studio--tranSTUDIO 2024: Adaptive Thoughts, Design and Fabrication",
        date: "2024 Fall",
        ratio: 1.4,
        description: "A micro-home study relying on a lateral sliding mechanism. Exploring dynamic expansion and contraction of living spaces.",
        fullDescription: `A kinetic micro-home driven by an integrated ceiling gear system that slides trapezoidal volumes to expand the spatial footprint, revealing a "hidden color" strategy within the unfolding furniture.`,
        imageUrl: "/assets/project6_main.jpg",
        gallerySections: [
          {
            sectionTitle: "SLIDING",
            images: [
              { 
                description: "As the name “Sliding House” suggests, the main movement of the entire house is sliding. The two trapezoidal parts of the box slide along the upper and lower tracks inside and drive the folding walls on the outer wall to unfold and gain more space.",
                url: "/assets/project6_Transformation.jpg", 
                caption: "Transformation Diagram"
              },
              { url: "/assets/project6_Transformation1.gif", caption: "Transformation--Sliding" },
              { url: "/assets/project6_Transformation2.gif", caption: "Transformation(Sliding)--Fusion 360" }
            ]
          },
          {
            sectionTitle: "GEARS",
            images: [
              { 
                description: "What drives the “slide” is a gear structure on the ceiling, which is composed of three large gears. There are small gears on the sides of the large gears, which fit against the gear edges at the top of the trapezoidal parts. When the middle large gear is turned, it will drive the large gears on both sides, as well as the small gears above them, causing the two trapezoidal parts to move in opposite directions at the same time.",
                url: "/assets/project6_Gears.jpg", 
                caption: "Gears Diagram"
              },
              { url: "/assets/project6_Gears1.gif", caption: "Transformation--Gears" },
              { url: "/assets/project6_Gears2.gif", caption: "Transformation(Gears)--Fusion 360" }
            ]
          },
          {
            sectionTitle: "INTERIOR",
            images: [
              { 
                description: "Because the interior is too cramped, try to use warm colors (yellow) to decorate furniture, such as cabinet doors, the interior walls of the bathroom, bed linen, etc., so that the occupants will not feel oppressed. At the same time, try to “hide the color”. Before the furniture is unfolded and deformed, the main interior color is white. When the furniture is unfolded, the interior color will be revealed, which will surprise people.",
                url: "/assets/project6_Interior1.jpg", 
                caption: "Furniture Transformation Diagram"
              },
              { url: "/assets/project6_Interior2.jpg", caption: "Isometric Section" },
              { url: "/assets/project6_Furniture1.gif", caption: "Table" },
              { url: "/assets/project6_Furniture2.gif", caption: "Bed" },
              { url: "/assets/project6_Furniture3.gif", caption: "Kitchen" }
            ]
          },
          {
            sectionTitle: "DRAWINGS",
            images: [
              { url: "/assets/project6_detail1.jpg", caption: "Closed Floor Plan" },
              { url: "/assets/project6_detail2.jpg", caption: "Expanded Floor Plan" },
              { url: "/assets/project6_detail3.jpg", caption: "Section" }
            ]
          },
          {
            sectionTitle: "RENDER",
            images: [
              { url: "/assets/project6_render1.jpg", caption: "Interior Render 1" },
              { url: "/assets/project6_render2.jpg", caption: "Interior Render 2" },
              { url: "/assets/project6_render3.jpg", caption: "Interior Render 3" },
              { url: "/assets/project6_render4.jpg", caption: "Exterior Render 1" },
              { url: "/assets/project6_render5.jpg", caption: "Exterior Render 2" }
            ]
          },
          {
            sectionTitle: "PHYSICAL MODEL",
            images: [
              { url: "/assets/project6_Model1.jpg", caption: "Render 1" },
              { url: "/assets/project6_Model2.jpg", caption: "Render 2" }
            ]
          }
        ],
        tags: ["Kinetic", "Residential"]
      },
      {
        id: 8,
        name: "Whisper Archway",
        type: "Tensegrity Installation",
        location: "Digital Fabrication Lab",
        studio: "B.Arch Advanced Studio--Bamboo Tectonic: From Nature to Computation",
        date: "2024 Fall",
        groupMembers: "Liwen Shao(Ray), Ziching Ooi, Junghan Bae",
        ratio: 1.6,
        description: "A 1:1 tensegrity pavilion bridging digital simulation and physical fabrication, utilizing a tension network of high-strength fishing lines to suspend bamboo struts for a 'floating' effect.",
        fullDescription: `This project is a 1:1 scale exploration of tensegrity structures, bridging digital simulation with manual fabrication. We utilized Grasshopper to generate the form and analyze the equilibrium between tension and compression forces. 

Materially, the pavilion consists of bamboo members acting as compression struts, suspended within a network of high-strength nylon lines (tension cables). The connections are detailed with closed hook screws drilled into the bamboo, creating a precise joinery system that allows the structure to achieve stability and a visual effect of “floating.`,
        imageUrl: "/assets/project8_main.jpg",
        gallerySections: [
          {
            sectionTitle: "SHAPE DESIGN",
            images: [
              { url: "/assets/project8_Diagram1.jpg", caption: "Shape Design Process Diagram" },
              { url: "/assets/project8_Diagram2.gif", caption: "Shape Design Process GIF" },
              { url: "/assets/project8_Diagram3.png", caption: "Grasshopper Script" }
            ]
          },
          {
            sectionTitle: "JOINT DESIGN AND ASSEMBLY",
            images: [
              { url: "/assets/project8_Joint1.jpg", caption: "Joint Assembly Detail Diagram" },
              { url: "/assets/project8_Joint2.gif", caption: "Joint Assembly GIF" }
            ]
          },
          {
            sectionTitle: "MAIN STRUCTURE ASSEMBLY",
            images: [
              { url: "/assets/project8_Tool1.jpg", caption: "All Tools For Assembly" },
              { url: "/assets/project8_Assembly1.gif", caption: "Assembly GIF--Adjust the Shape" },
              { url: "/assets/project8_Assembly2.gif", caption: "Assembly GIF--Hang the Horizontal Curve" }
            ]
          },
          {
            sectionTitle: "RENDER",
            images: [
              { url: "/assets/project8_render1.jpg", caption: "Render 1" },
              { url: "/assets/project8_render2.jpg", caption: "Render 2" },
              { url: "/assets/project8_render3.jpg", caption: "Render 3" },
            ]
          },
           {
            sectionTitle: "PHYSICAL MODEL",
            images: [
              { url: "/assets/project8_Model1.jpg", caption: "Render 1" },
              { url: "/assets/project8_Model2.jpg", caption: "Render 2" },
              { url: "/assets/project8_Model3.jpg", caption: "Render 2" }
            ]
          },
          {
            sectionTitle: "AR",
            images: [
              { url: "/assets/project8_AR1.jpg", caption: "Scan the QR Code to View the AR Model" }
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
        material: "Acrylic, Glue",
        studio: "B.Arch Design Media 3",
        ratio: 1.5,
        description: "",
        fullDescription: `An exploration of point, line, and surface geometries generated via Grasshopper. The physical artifact consists of multiple layered, laser-cut acrylic sheets featuring triangular patterns of varying scales and tints. When illuminated, the overlapping geometries optically blend to produce dynamic, multidimensional color effects.`,
        imageUrl: "/assets/other1.jpg",
        gallerySections: [
           {
            sectionTitle: "",
            images: [
              { url: "/assets/project10_Diagram1.jpg", caption: "Digital Drawing" },
              { url: "/assets/project10_Model1.jpg", caption: "Physical Model" },
              { url: "/assets/project10_Diagram3.jpg", caption: "Under Illumination" }
            ]
          }
        ],
        tags: ["Laser Cut"]
      },
      {
        id: 11,
        name: "CNC & Slip Casting",
        type: "Digital Media",
        material: "Wood, Liquid Clay, Plaster",
        studio: "B.Arch Design Media 3",
        groupMembers: "Liwen Shao(Ray), Berk Kip, Marcus",
        ratio: 1.5,
        description: "",
        fullDescription: `A study in digital-to-physical fabrication and modularity. Grasshopper was utilized to generate a highly adaptable tile pattern, which was then CNC-milled into wooden positive models. These wooden prototypes served as the basis for crafting plaster molds, enabling the final production of the modular system through ceramic slip casting.`,
        imageUrl: "/assets/other2.jpg",
        gallerySections: [
          {
            sectionTitle: "DIAGRAMS",
            images: [
              { url: "/assets/project11_Diagram1.jpg", caption: "Elevation Drawing" },
              { url: "/assets/project11_Diagram2.jpg", caption: "Slip Casting Diagram" },
              { url: "/assets/project11_Diagram3.jpg", caption: "Render 1" },
              { url: "/assets/project11_Diagram4.jpg", caption: "Render 2" }
            ]
          },
          {
            sectionTitle: "PROCESS",
            images: [
              { url: "/assets/project11_Process1.jpg", caption: "Process 1" },
              { url: "/assets/project11_Process2.jpg", caption: "Process 2" }
            ]
          }
        ],
        tags: ["CNC", "Casting"]
      },
      {
        id: 12,
        name: "3D Print",
        type: "Digital Media",
        material: "3D Printer, PLA Filaments",
        ratio: 1.5,
        description: "",
        fullDescription: `practical applications of 3D printing in architectural model making. The first approach utilizes specific PLA filaments to accurately simulate the visual and tactile qualities of diverse building materials. 

The second focuses on kinetic structural design, incorporating precisely modeled tolerances and screw-joint connections to fabricate functional, movable scissor mechanisms.`,
        imageUrl: "/assets/other3.jpg",
        gallerySections: [
          {
            sectionTitle: "SIMULATE DIFFERENT MATERIAL",
            images: [
              { url: "/assets/project12_Photo1.jpg", caption: "Process 1" }
            ]
          },
          {
            sectionTitle: "KINETIC STRUCTURAL DESIGN",
            images: [
              { url: "/assets/project12_Photo2.jpg", caption: "Process 1" }
            ]
          }
        ],
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

// 新增组件：淡入动画容器，使用 IntersectionObserver 监听滚动
const FadeIn = ({ children, delay = 0, className = "", id, style, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // 当元素进入视口时触发
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current); // 触发一次后就不再监听，保持状态
      }
    }, { 
      // rootMargin 可以在元素离底部还有 50px 时就提前触发，显得更顺滑
      rootMargin: '0px 0px -50px 0px' 
    });

    const current = domRef.current;
    if (current) observer.observe(current);
    
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return (
    <div
      id={id}
      ref={domRef}
      onClick={onClick}
      // 核心动画：translate-y-12 负责初始偏下的位置，duration-[1200ms] 控制极其缓慢高级的浮起速度
      className={`transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const allProjects = portfolioData.flatMap(cat => cat.projects);
  let nextProject = null;
  if (activeProject) {
    const currentIndex = allProjects.findIndex(p => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % allProjects.length;
    nextProject = allProjects[nextIndex];
  }

  const handleCloseProject = () => {
    const currentId = activeProject.id;
    setActiveProject(null);
    setTimeout(() => {
      const element = document.getElementById(`project-thumb-${currentId}`);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

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

  const navigateTo = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (activeProject) {
      handleBackToHome(sectionId);
    } else {
      scrollToSection(sectionId);
    }
  };

  const MobileMenuOverlay = () => (
    <div className={`md:hidden fixed inset-0 z-[100] bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-12 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-[#1C1C1C] p-2">
         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <button onClick={() => navigateTo('hero')} className="text-2xl tracking-[0.3em] font-black uppercase text-[#1C1C1C]">Home</button>
      <button onClick={() => navigateTo('work')} className="text-2xl tracking-[0.3em] font-black uppercase text-[#1C1C1C]">Projects</button>
      <button onClick={() => navigateTo('about')} className="text-2xl tracking-[0.3em] font-black uppercase text-[#1C1C1C]">About</button>
      <button onClick={() => navigateTo('contact')} className="text-2xl tracking-[0.3em] font-black uppercase text-[#1C1C1C]">Contact</button>
    </div>
  );

  if (activeProject) {
    return (
      <div className="min-h-screen bg-white text-[#1C1C1C] font-sans selection:bg-[#1C1C1C] selection:text-white antialiased animate-in fade-in duration-700">
        <MobileMenuOverlay />
        
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl py-6 border-b border-[#1C1C1C]/10">
          <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
            <button onClick={handleCloseProject} className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C] hover:text-[#1C1C1C]/60 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </button>
            <div className="hidden md:flex space-x-12 text-[11px] tracking-[0.2em] font-bold uppercase text-[#1C1C1C]/60">
              <button onClick={() => handleBackToHome('hero')} className="hover:text-[#1C1C1C] transition-colors">Home</button>
              <button onClick={() => handleBackToHome('work')} className="hover:text-[#1C1C1C] transition-colors">Projects</button>
              <button onClick={() => handleBackToHome('about')} className="hover:text-[#1C1C1C] transition-colors">About</button>
              <button onClick={() => handleBackToHome('contact')} className="hover:text-[#1C1C1C] transition-colors">Contact</button>
            </div>
            <Menu className="md:hidden w-6 h-6 text-[#1C1C1C] cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </nav>

        <div className="container mx-auto px-6 md:px-16 py-16 md:py-32 mt-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="md:col-span-4 space-y-8 md:space-y-12">
              <FadeIn>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4">{activeProject.name}</h1>
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/60">{activeProject.type}</p>
              </FadeIn>
              <FadeIn delay={150} className="space-y-6 pt-6 md:pt-8 border-t border-[#1C1C1C]/10">
                {activeProject.location && (<div><h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-1">Location</h4><p className="text-sm font-medium">{activeProject.location}</p></div>)}
                {activeProject.material && (<div><h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-1">Material</h4><p className="text-sm font-medium">{activeProject.material}</p></div>)}
                {activeProject.studio && (<div><h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-1">Studio</h4><p className="text-sm font-medium">{activeProject.studio}</p></div>)}
                {activeProject.date && (<div><h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-1">Date</h4><p className="text-sm font-medium">{activeProject.date}</p></div>)}
                {activeProject.groupMembers && (
                  <div>
                    <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-1">Group Member</h4>
                    <p className="text-sm font-medium">{activeProject.groupMembers}</p>
                  </div>
                )}
              </FadeIn>
            </div>

            <div className="md:col-span-8 mt-8 md:mt-0">
              <FadeIn delay={200}>
                <h3 className="text-[16px] md:text-[22px] font-bold tracking-[0.5em] uppercase text-[#1C1C1C]/50 mb-8 md:mb-10">Concept & Overview</h3>
                <p className="text-[15px] md:text-lg leading-loose text-[#1C1C1C]/80 font-light mb-20 md:mb-32 text-justify whitespace-pre-line">{activeProject.fullDescription}</p>
              </FadeIn>
              
              {activeProject.gallerySections?.map((section, sIndex) => (
                <div key={sIndex} className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[#1C1C1C]/10 first:mt-0 first:pt-0 first:border-t-0">
                  <FadeIn>
                    <h3 className="text-[16px] md:text-[22px] font-bold tracking-[0.5em] uppercase text-[#1C1C1C]/50 mb-8 md:mb-12">{section.sectionTitle}</h3>
                  </FadeIn>
                  <div className="space-y-12 md:space-y-16">
                    {section.images?.map((imgObj, index) => (
                      <FadeIn key={index} delay={index * 100} className="group/drawing">
                        {imgObj.description && (
                          <p className="mb-6 md:mb-8 text-[13px] md:text-sm text-[#1C1C1C]/80 leading-relaxed max-w-4xl font-light">
                            {imgObj.description}
                          </p>
                        )}
                        <div className="w-full bg-[#EAE8E3] overflow-hidden border border-[#1C1C1C]/5">
                          <img 
                            src={imgObj.url} 
                            alt={imgObj.caption || "Project Image"} 
                            className="w-full h-auto block" 
                            onError={(e) => { e.target.src = "https://placehold.co/1200x800?text=Project+Detail"; }} 
                          />
                        </div>
                        {section.sectionTitle !== "PHYSICAL MODEL" && (
                          <p className="mt-4 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40">
                            {imgObj.caption || `${section.sectionTitle} ${index + 1}`}
                          </p>
                        )}
                      </FadeIn>
                    ))}
                  </div>
                </div>
              ))}

              <FadeIn className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-[#1C1C1C]/10 flex justify-between items-end">
                 <button 
                  onClick={handleCloseProject}
                  className="group inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 hover:text-[#1C1C1C] transition-colors mb-2 md:mb-3"
                 >
                   <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                   Back to Projects
                 </button>

                 {nextProject && (
                  <div
                    className="group relative flex flex-col items-end cursor-pointer"
                    onClick={() => handleProjectClick(nextProject)}
                  >
                    <div className="hidden md:block absolute bottom-full right-0 mb-6 w-36 md:w-48 aspect-square rounded-xl overflow-hidden opacity-0 group-hover:opacity-90 backdrop-blur-sm transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none z-10 border border-[#1C1C1C]/10 shadow-2xl">
                      <img src={nextProject.imageUrl} alt={nextProject.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]/40 mb-2 transition-colors">Next Project</span>
                    <h3 className="text-lg md:text-2xl font-black tracking-tighter uppercase text-[#1C1C1C]/70 group-hover:text-[#1C1C1C] transition-colors flex items-center gap-2 text-right">
                      {nextProject.name} <ChevronRight className="w-4 h-4 md:w-6 md:h-6 md:group-hover:translate-x-2 transition-transform" />
                    </h3>
                  </div>
                 )}
              </FadeIn>

            </div>
          </div>
        </div>
        <footer className="py-8 border-t border-[#1C1C1C]/10 text-center text-[10px] font-bold tracking-[0.3em] uppercase text-[#1C1C1C]/40">© {new Date().getFullYear()} Liwen Shao.</footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1C1C1C] font-sans selection:bg-[#1C1C1C] selection:text-white antialiased animate-in fade-in duration-700 relative overflow-x-hidden">
      <MobileMenuOverlay />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-[#1C1C1C]/10 shadow-sm' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 md:px-16 flex justify-end items-center">
          <div className="hidden md:flex space-x-12 text-[11px] tracking-[0.2em] font-bold uppercase text-[#1C1C1C]/60">
            <button onClick={() => scrollToSection('hero')} className="hover:text-[#1C1C1C] transition-colors">Home</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-[#1C1C1C] transition-colors">Projects</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#1C1C1C] transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#1C1C1C] transition-colors">Contact</button>
          </div>
          <Menu className="md:hidden w-6 h-6 text-[#1C1C1C] cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </nav>

      {/* 主页 Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-16">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="relative z-20 space-y-12 md:space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 w-full max-w-[1000px] mx-auto mt-12 md:mt-0">
          <div className="w-full flex flex-col gap-6 md:gap-14">
            <AlignedText text="ARCHITECTURE" className="text-[12vw] md:text-[6.5vw] font-black leading-none tracking-normal" />
            <AlignedText text="PORTFOLIO" className="text-[16vw] md:text-[8.8vw] font-black leading-none tracking-normal" />
          </div>
          <div className="flex flex-col items-center w-full relative">
            <div className="w-full flex justify-center mb-8 md:mb-12 relative">
               <div className="absolute left-0 right-0 top-1/2 h-px bg-[#1C1C1C]/10"></div>
               <div className="relative z-50 bg-white px-6 md:px-8 cursor-pointer group" onClick={() => scrollToSection('work')}>
                 <ArrowDown className="w-5 h-5 text-[#1C1C1C]/30 group-hover:text-[#1C1C1C] transition-colors animate-bounce" />
               </div>
            </div>
            <p className="w-full whitespace-nowrap text-[8px] sm:text-[10px] md:text-[11px] text-[#1C1C1C]/40 tracking-[0.3em] md:tracking-[0.45em] font-bold uppercase text-center relative z-20">Architecture Portfolio Selected Works 2023–2025</p>
          </div>
        </div>
      </section>

      {/* 项目列表区，所有区块和卡片被 FadeIn 包裹实现滚动淡入浮现 */}
      <section id="work" className="py-20 md:py-48 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-[#1C1C1C]/10 pb-8 md:pb-12 relative">
            <div><h2 className="text-4xl md:text-6xl font-black text-[#1C1C1C] tracking-tighter mb-2 md:mb-4">Projects</h2></div>
            <div className="text-[#1C1C1C] text-6xl md:text-7xl font-black opacity-5 hidden md:block tracking-tighter">01 — 04</div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-32 md:mb-48">
            {portfolioData.map((cat, idx) => (
              <FadeIn 
                key={cat.id} 
                delay={idx * 150} // 依次延迟浮现
                className="flex flex-col border-l border-[#1C1C1C] pl-6 py-2 group cursor-pointer min-h-[160px] md:min-h-[360px]"
                onClick={() => scrollToSection(`section-${cat.id}`)}
              >
                <span className="text-5xl md:text-6xl font-black text-[#1C1C1C] tracking-tighter mb-12 md:mb-40 group-hover:translate-x-2 transition-transform duration-500">
                  {cat.id}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-[#1C1C1C] mb-2 md:mb-4 group-hover:text-[#1C1C1C]/60 transition-colors">
                  {cat.category}
                </h3>
                <p className="text-[10px] text-[#1C1C1C]/50 leading-relaxed tracking-widest font-medium italic mt-auto pr-4">
                  {cat.description}
                </p>
              </FadeIn>
            ))}
          </div>

          <div className="space-y-40 md:space-y-64">
            {portfolioData?.map((cat, idx) => (
              <div key={idx} className="group" id={`section-${cat.id}`}>
                <FadeIn className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16 overflow-hidden">
                  <span className="text-5xl md:text-7xl font-black text-[#1C1C1C]/20 group-hover:text-[#1C1C1C]/40 transition-colors duration-500 tracking-tighter">{cat.id}</span>
                  <div className="h-px flex-grow bg-[#1C1C1C]/10 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#1C1C1C]/20 rounded-full"></div>
                  </div>
                  <h3 className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] font-bold uppercase text-[#1C1C1C]/60 whitespace-nowrap">{cat.category}</h3>
                </FadeIn>

                <div className="space-y-24 md:space-y-32">
                  {Array.from({ length: Math.ceil(cat.projects.length / 2) }).map((_, rowIndex) => {
                    const rowProjects = cat.projects.slice(rowIndex * 2, rowIndex * 2 + 2);
                    const isFullRow = rowProjects.length === 2;

                    return (
                      <div key={rowIndex} className={`flex flex-col md:flex-row gap-y-20 md:gap-y-0 gap-x-12 md:gap-x-16 items-stretch w-full overflow-hidden ${isFullRow ? '' : 'md:justify-start'}`}>
                        {rowProjects.map((project, pIdx) => (
                          <FadeIn 
                            id={`project-thumb-${project.id}`}
                            key={project.id} 
                            delay={pIdx * 150} // 右侧卡片比左侧卡片稍晚浮现，形成交错美感
                            style={{ '--project-ratio': project.ratio || 1 }}
                            className={`group/item relative flex flex-col cursor-pointer w-full ${isFullRow ? 'md:[flex:var(--project-ratio)]' : 'md:w-auto md:max-w-[48%]'}`} 
                            onClick={() => handleProjectClick(project)}
                          >
                            <div className="relative overflow-hidden mb-6 md:mb-8 aspect-[4/3] md:aspect-auto md:h-[400px] lg:h-[480px] w-full">
                              <img 
                                src={project.imageUrl} 
                                alt={project.name} 
                                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 ease-out group-hover/item:scale-[1.02] group-hover/item:grayscale-0 group-hover/item:opacity-100" 
                                onError={(e) => { e.target.src = "https://placehold.co/1200x800?text=Architecture+Project"; }}
                              />
                              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-all duration-500 md:translate-y-4 md:group-hover/item:translate-y-0">
                                <button className="bg-[#1C1C1C] text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                                   <span className="hidden md:inline">Read More</span> <ArrowDown className="w-3 h-3 md:w-4 md:h-4 -rotate-90" />
                                </button>
                              </div>
                            </div>
                            
                            <div className="flex flex-col flex-grow w-full">
                              <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1C1C1C] tracking-tighter group-hover/item:text-[#1C1C1C]/70 transition-colors leading-[1.1] mb-3 md:mb-4">{project.name}</h4>
                              <p className="text-[#1C1C1C]/60 text-[13px] md:text-sm leading-relaxed mb-6 mt-auto">{project.description}</p>
                              
                              <div className="pt-4 flex items-center justify-end text-[10px] font-bold text-[#1C1C1C]/40 tracking-[0.2em] uppercase border-t border-[#1C1C1C]/10">
                                <span className="group-hover/item:text-[#1C1C1C] transition-colors underline decoration-1 underline-offset-4">Details</span>
                              </div>
                            </div>
                          </FadeIn>
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

      <section id="about" className="py-24 md:py-48 bg-white relative border-y border-[#1C1C1C]/5 z-10">
        <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <FadeIn className="relative group max-w-sm mx-auto md:max-w-none w-full">
            <div className="aspect-[4/5] bg-white overflow-hidden grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100">
               <img 
                 src="/assets/profile.jpg" 
                 className="w-full h-full object-cover" 
                 alt="Liwen Shao Profile" 
                 onError={(e) => { e.target.src = "https://placehold.co/800x1000?text=Please+add+profile.jpg+to+assets"; }}
               />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-48 md:h-48 border-r-2 border-b-2 border-[#1C1C1C]/10 pointer-events-none group-hover:border-[#1C1C1C]/30 transition-colors duration-700"></div>
          </FadeIn>
          
          <FadeIn delay={200} className="space-y-6 md:space-y-10 text-center md:text-left mt-8 md:mt-0">
            <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-[#1C1C1C]/40">The Architectural Designer</h3>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#1C1C1C] tracking-tighter leading-none">LIWEN SHAO <br className="hidden md:block"/><span className="text-2xl md:text-3xl lg:text-5xl text-[#1C1C1C]/20 tracking-normal ml-2 md:ml-0">邵骊文</span></h2>
            <div className="space-y-6 text-[14px] md:text-lg text-[#1C1C1C]/70 font-serif leading-relaxed text-justify md:text-left">
              <p>
                Architecture student at CCA and detail-oriented designer proficient in Rhino and V-Ray, seeking a Junior Designer or Internship role to translate ambitious design concepts into precise, high-quality models and documentation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-48 bg-white relative overflow-hidden z-10">
        <div className="container mx-auto px-6 md:px-16 text-center relative z-10">
          
          <FadeIn>
            <h2 className="text-[13vw] md:text-[10rem] font-black text-[#1C1C1C]/5 tracking-tighter mb-0 select-none pointer-events-none uppercase whitespace-nowrap relative z-0">
              CONTACT ME
            </h2>
          </FadeIn>
          
          <FadeIn delay={150} className="w-full max-w-3xl mx-auto bg-white/50 backdrop-blur-md border border-[#1C1C1C]/10 p-8 md:p-20 shadow-sm relative z-20 -mt-4 md:-mt-24">
            <p className="text-[14px] md:text-lg text-[#1C1C1C]/70 leading-relaxed font-light mb-8 md:mb-12 relative z-30">
              I am currently seeking full-time opportunities. If you are interested in my work or would like to discuss potential collaborations, please feel free to reach out.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-16 relative z-30">
              <a href="mailto:liwenshao1018@gmail.com" className="flex flex-col items-center gap-3 md:gap-4 group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center group-hover:bg-[#1C1C1C] group-hover:text-white transition-all duration-500 text-[#1C1C1C]"><Mail className="w-5 h-5 md:w-6 md:h-6" /></div>
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-[#1C1C1C]/60 group-hover:text-[#1C1C1C] transition-colors uppercase">liwenshao1018@gmail.com</span>
              </a>
              <a href="tel:+16282589330" className="flex flex-col items-center gap-3 md:gap-4 group mt-4 md:mt-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center group-hover:bg-[#1C1C1C] group-hover:text-white transition-all duration-500 text-[#1C1C1C]"><Phone className="w-5 h-5 md:w-6 md:h-6" /></div>
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-[#1C1C1C]/60 group-hover:text-[#1C1C1C] transition-colors uppercase">+1 628-258-9330</span>
              </a>
            </div>
          </FadeIn>

          <footer className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-[#1C1C1C]/10 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-[#1C1C1C]/40 gap-4 md:gap-8">
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