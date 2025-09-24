
const products = [

    { name: "NovaStar VC2", type: "processadora", category: "cat-2 cat-novastar", imageSrc: "img/VC2.png", 
        specs: [ 
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "1x DVI, 1x HDMI 1.3, 1x VGA, 1x USB, 1x CVBS" }, 
            { label: "Saídas", value: "2x Portas RJ45" }, 
            { label: "Botão Scale", value: "Possui" },
            { label: "Capacidade", value: "1.3 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1080@60Hz" }, 
            { label: "Dimensões", value: "482.6 x 250 x 50 mm" },
            { label: "Consumo", value: "12W" }
        ], 
        recommendation: "Instalações fixas e eventos de pequeno porte como lojas, hotéis e salas de reunião, onde a versatilidade de entradas são essenciais.",
        technicalFileUrl: "pdfs/VC2.pdf" 
    },
    { name: "Colorlight X2s", type: "processadora", category: "cat-2 cat-colorlight", imageSrc: "img/X2s.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "2x DVI, 1x HDMI 1.4" }, 
            { label: "Saídas", value: "2x Portas RJ45" }, 
            { label: "Botão Scale", value: "Não possui" },
            { label: "Capacidade", value: "1.31 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 262 x 44 mm" },
            { label: "Consumo", value: "10W" }
        ], 
        recommendation: "Instalações fixas.",
        technicalFileUrl: "pdfs/x2s.pdf" 
    },
    { name: "Colorlight X2m", type: "processadora", category: "cat-2 cat-colorlight", imageSrc: "img/X2m.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "2x HDMI 1.4, 1x DVI, 1x VGA, 1x CVBS, 1x USB" }, 
            { label: "Saídas", value: "2x Portas RJ45" }, 
            { label: "Botão Scale", value: "Não possui" },
            { label: "Capacidade", value: "1.3 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1080@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 292 x 44 mm" },
            { label: "Consumo", value: "10W" }
        ], 
        recommendation: "Instalações fixas de pequeno a médio porte que necessitam de uma ampla gama de entradas, incluindo analógicas, e reprodução via USB.",
        technicalFileUrl: "pdfs/x2m.pdf" 
    },
    { name: "NovaStar VC4", type: "processadora", category: "cat-4 cat-novastar", imageSrc: "img/VC4.png", 
        specs: [
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "1x DVI, 1x HDMI 1.3, 1x VGA, 1x USB, 1x CVBS" }, 
            { label: "Saídas", value: "4x Portas RJ45" }, 
            { label: "Botão Scale", value: "Possui" },
            { label: "Capacidade", value: "2.6 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1080@60Hz" }, 
            { label: "Dimensões", value: "482.6 x 250 x 50 mm" },
            { label: "Consumo", value: "25W" }
        ], 
        recommendation: "Instalações comerciais de médio porte, como fachadas de lojas, estúdios de TV e centros de exibição que exigem maior capacidade de pixels.",
        technicalFileUrl: "pdfs/vc4.pdf" 
    },
    { name: "NovaStar VX400", type: "processadora", category: "cat-4 cat-novastar", imageSrc: "img/VX400.png", 
        specs: [ 
        { label: "Sistema", value: "Nova Star" },
        { label: "Entradas", value: "2x HDMI 1.3(1xLOOP), 1x DVI(1xLOOP), 1x 3G-SDI(1x LOOP), 1x Light Sensor" }, 
        { label: "Saídas", value: "4x Portas RJ45, 2x Fiber" }, 
        { label: "Botão Scale", value: "Possui" },
        { label: "Capacidade", value: "2.6 Milhões de pixels" }, 
        { label: "Res. Máx. Entrada", value: "1920×1200@60Hz" }, 
        { label: "Entrada Customizável", value: "Sim" }, 
        { label: "Dimensões", value: "483.6 × 301.2 × 50.1 mm" },
        { label: "Consumo", value: "28W" }
        ], 
        recommendation: "Projetos que exigem múltiplas fontes de vídeo, incluindo entradas analógicas e digitais, e a funcionalidade PIP para exibir duas fontes simultaneamente.",
        technicalFileUrl: "pdfs/VX400.pdf" 
    },    
    { name: "NovaStar VX400s", type: "processadora", category: "cat-4 cat-novastar", imageSrc: "img/VX400s.png", 
        specs: [ 
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "2x CVBS, 2x VGA, 1x SDI(1xLOOP), 1x DVI(1xLOOP), 1x HDMI, 1x YPbPr, 1x Áudio" }, 
            { label: "Saídas", value: "4x Portas RJ45" }, 
            { label: "Botão Scale", value: "Possui" },
            { label: "Capacidade", value: "2.6 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1080p@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 250 x 50.1 mm" },
            { label: "Consumo", value: "25W" }
        ], 
        recommendation: "Projetos que exigem múltiplas fontes de vídeo, incluindo entradas analógicas e digitais, e a funcionalidade PIP para exibir duas fontes simultaneamente.",
        technicalFileUrl: "pdfs/vx400s.pdf" 
    },
    { name: "Colorlight X4s", type: "processadora", category: "cat-4 cat-colorlight", imageSrc: "img/X4s.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "2x DVI, 1x HDMI 1.4" }, 
            { label: "Saídas", value: "4x Portas RJ45" }, 
            { label: "Botão Scale", value: "Não possui" },
            { label: "Capacidade", value: "2.6 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 262 x 44 mm" },
            { label: "Consumo", value: "10W" }
        ], 
        recommendation: "Instalações fixa, ideal para telas mais largas ou com formatos customizados que demandam mais saídas.",
        technicalFileUrl: "pdfs/x4s.pdf" 
    },
    { name: "Colorlight X4m", type: "processadora", category: "cat-4 cat-colorlight", imageSrc: "img/X4m.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "2x HDMI 1.4, 1x DVI, 1x VGA, 1x CVBS, 1x USB" }, 
            { label: "Saídas", value: "4x Portas RJ45" }, 
            { label: "Botão Scale", value: "Não possui" },
            { label: "Capacidade", value: "2.6 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1080@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 292.0 x 44.0 mm" },
            { label: "Consumo", value: "10W" }
        ], 
        recommendation: "Eventos, oferecendo controle flexível e exibição de imagem de alta qualidade com uma vasta gama de entradas.",
        technicalFileUrl: "pdfs/x4m.pdf" 
    },
    { name: "Colorlight X4e", type: "processadora", category: "cat-4 cat-colorlight", imageSrc: "img/X4e.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "2x SDI, 1x DP, 1x HDMI, 1x DVI" }, 
            { label: "Saídas", value: "4x Portas RJ45" }, 
            { label: "Botão Scale", value: "Não possui" },
            { label: "Capacidade", value: "2.6 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 240 x 44 mm" },
            { label: "Consumo", value: "20W" }
        ], 
        recommendation: "Estudios, broadcast e ambientes que necessitam de sincronismo de sinal (Genlock) e fontes de vídeo profissionais como SDI e DP.",
        technicalFileUrl: "pdfs/x4e.pdf" 
    },
    { name: "NovaStar VC6", type: "processadora", category: "cat-6 cat-novastar", imageSrc: "img/VC6.png", 
        specs: [ 
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "2x HDMI 1.3, 1x DVI, 1x 3G-SDI" }, 
            { label: "Saídas", value: "6x Portas RJ45" }, 
            { label: "Botão Scale", value: "Possui" },
            { label: "Capacidade", value: "3.9 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 250 x 50.1 mm" },
            { label: "Consumo", value: "28W" }
        ], 
        recommendation: "Broadcast, estúdios virtuais e grandes instalações fixas que demandam múltiplas camadas de vídeo e entrada SDI.",
        technicalFileUrl: "pdfs/vc6.pdf" 
    },
      {
        name: "NovaStar VX600",
        type: "processadora",
        category: "cat-6 cat-novastar",
        imageSrc: "img/VX600.png",
        specs: [
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "1x HDMI 1.3 (IN & LOOP), 1x DVI (IN & LOOP), 1x 3G-SDI (IN & LOOP), 1x 10G optical fiber port (OPT1)" },
            { label: "Saídas", value: "6x Gigabit Ethernet, 2x Fiber" },
            { label: "Botão Scale", value: "Possui" },
            { label: "Capacidade", value: "3.9 Milhões de pixels" },
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" },
            { label: "Entrada Customizável", value: "Sim" },
            { label: "Dimensões", value: "483.6 x 351.2 x 50.1 mm" },
            { label: "Consumo", value: "28W" }
        ],
        recommendation: "Ideal para telas LED de grande formato (ultra-wide e ultra-high) e sistemas de controle de palco que exigem alta capacidade de pixels e múltiplas opções de entrada e saída.",
        technicalFileUrl: "pdfs/vx600.pdf" 
    },
    { name: "Colorlight X6", type: "processadora", category: "cat-6 cat-colorlight", imageSrc: "img/X6.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "2x DVI, 1x HDMI, 1x SDI" }, 
            { label: "Saídas", value: "6x Portas RJ45" }, 
            { label: "Botão Scale", value: "Não Possui" },
            { label: "Capacidade", value: "3.9 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 306.2 x 44 mm" },
            { label: "Consumo", value: "30W" }
        ], 
        recommendation: "Locação, grandes shows e eventos complexos que exigem máxima flexibilidade com múltiplos layers e troca de fontes sem cortes.",
        technicalFileUrl: "pdfs/x6.pdf" 
    },
    { name: "Colorlight X7", type: "processadora", category: "cat-8 cat-colorlight", imageSrc: "img/X7.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "2×DVI, 1×HDMI 1.4, 1×SDI" }, 
            { label: "Saídas", value: "8 portas RJ45" }, 
            { label: "Botão Scale", value: "Não possui" },
            { label: "Capacidade", value: "5.2 milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920X1200@60" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6X44X306.2mm" },
            { label: "Consumo", value: "30W" }
        ], 
        recommendation: "",
        technicalFileUrl: "pdfs/X7.pdf" 
    },
        { name: "Colorlight X8E", type: "processadora", category: "cat-8 cat-colorlight", imageSrc: "img/X8E.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "1×DP 1.2, 1×HDMI 2.0, 2×HDMI 1.4, 2×DVI" }, 
            { label: "Saídas", value: "	8 Portas RJ45" }, 
            { label: "Botão Scale", value: "Possui" },
            { label: "Capacidade", value: "5.2 milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "4096x2160@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6x88.0x414.1mm" },
            { label: "Consumo", value: "50W" }
        ], 
        recommendation: "",
        technicalFileUrl: "pdfs/X8E.pdf" 
    },

    { name: "NovaStar VC10", type: "processadora", category: "cat-10 cat-novastar", imageSrc: "img/VC10.png", 
        specs: [ 
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "2x HDMI 1.4, 1x DVI, 1x 3G-SDI" }, 
            { label: "Saídas", value: "10x Portas RJ45" }, 
            { label: "Botão Scale", value: "Possui" },
            { label: "Capacidade", value: "6.5 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "4Kx1K@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 250 x 50.1 mm" },
            { label: "Consumo", value: "28W" }
        ], 
        recommendation: "Instalações fixas de porte, centros de comando e salas de conferência que necessitam de alta capacidade de processamento 4K.",
        technicalFileUrl: "pdfs/vc10.pdf" 
    },
    {
        name: "NovaStar VX1000",
        type: "processadora",
        category: "cat-10 cat-novastar",
        imageSrc: "img/VX1000.png",
        specs: [
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "2x HDMI 1.4 (IN & LOOP), 2x DVI (IN & LOOP), 1x 3G-SDI (IN & LOOP), 1x 10G optical fiber port (OPT1)" },
            { label: "Saídas", value: "10x Gigabit Ethernet, 2x Fiber, 1x HDMI 1.3" },
            { label: "Botão Scale", value: "Possui" },
            { label: "Capacidade", value: "6.5 Milhões de pixels" },
            { label: "Res. Máx. Entrada", value: "3840x2160@30Hz" },
            { label: "Entrada Customizável", value: "Sim" },
            { label: "Dimensões", value: "483.6 x 351.2 x 50.1 mm" },
            { label: "Consumo", value: "28W" }
        ],
        recommendation: "Ideal para telas LED ultra-wide e ultra-high, sistemas de controle de palco de alta capacidade e aplicações que exigem processamento 4Kx1K@60Hz e múltiplas opções de entrada e saída, incluindo fibra.",
        technicalFileUrl: "pdfs/vx1000.pdf"
    },
    { name: "Colorlight VX10", type: "processadora", category: "cat-10 cat-colorlight", imageSrc: "img/VX10.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "1x HDMI 2.0, 1x HDMI 1.4, 2x DVI, 1x 3G-SDI, 1x Fibra 10G" }, 
            { label: "Saídas", value: "10x Portas RJ45, 2x Fibra" }, 
            { label: "Botão Scale", value: "Não possui" },
            { label: "Capacidade", value: "6.5 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "4096x2160@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 418.7 x 44 mm" },
            { label: "Consumo", value: "75W" }
        ], 
        recommendation: "Locação de alto padrão, palcos, broadcast e filmagens, onde entradas 4K reais, HDR e saídas de fibra são necessarias.",
        technicalFileUrl: "pdfs/vx10.pdf" 
    },
    { name: "NovaStar MCTRL300", type: "sender", category: "cat-sender cat-novastar", imageSrc: "img/MCTRL300.png", 
        specs: [ 
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "1x DVI, 1x Áudio" }, 
            { label: "Saídas", value: "2x Portas RJ45" }, 
            { label: "Capacidade", value: "1.3 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "204.0 x 160.0 x 48.0 mm" } 
        ],
        technicalFileUrl: "pdfs/MCTRL300.pdf"
    },
  
    { name: "Colorlight S2", type: "sender", category: "cat-sender cat-colorlight", imageSrc: "img/S2.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "1x DVI, 1x Áudio" }, 
            { label: "Saídas", value: "2x Portas RJ45" }, 
            { label: "Capacidade", value: "1.31 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "275 x 198 x 44 mm" } 
        ],
        technicalFileUrl: "pdfs/S2.pdf" 
    },
    { name: "NovaStar MCTRL600", type: "sender", category: "cat-sender cat-novastar", imageSrc: "img/MCTRL600.png", 
        specs: [ 
            { label: "Sistema", value: "Nova Star" },
            { label: "Entradas", value: "1x DVI, 1x HDMI 1.3, 1x Áudio" }, 
            { label: "Saídas", value: "4x Portas RJ45" }, 
            { label: "Capacidade", value: "2.6 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.0 x 268.5 x 44.4 mm" } 
        ],
        technicalFileUrl: "pdfs/MCTRL600.pdf" 
    },
    { name: "Colorlight S4", type: "sender", category: "cat-sender cat-colorlight", imageSrc: "img/S4.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Entradas", value: "1x DVI, 1x HDMI, 1x Áudio" }, 
            { label: "Saídas", value: "4x Portas RJ45" }, 
            { label: "Capacidade", value: "2.3 Milhões de pixels" }, 
            { label: "Res. Máx. Entrada", value: "1920x1200@60Hz" }, 
            { label: "Entrada Customizável", value: "Sim" }, 
            { label: "Dimensões", value: "482.6 x 240 x 44 mm" } 
        ],
        technicalFileUrl: "pdfs/S4.pdf" 
    },

    { 
        name: "Colorlight 5A-75B", 
        type: "receiver", 
        category: "cat-receiver cat-marca-b", 
        imageSrc: "img/5A-75B.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Portas", value: "8 conectores HUB75E padrão" }, 
            { label: "Máx. Resolução", value: "Chips PWM: 192×1024px" }, 
            { label: "Dimensão", value: "145.2x91.7x18.4mm" },
            { label: "Rotação de imagem", value: "Possui"},
            { label: "Profundidade de cores", value: "8Bits"},
            { label: "Taxa de quadros", value: "Até 60Hz, e imagens de alta taxa de quadros de 120/240Hz"},

        ],
     
        equivalentProduct: "NovaStar MRV 208-1",
        technicalFileUrl: "" 
    },
    { 
        name: "NovaStar MRV 208-1", 
        type: "receiver", 
        category: "cat-receiver cat-marca-b", 
        imageSrc: "img/MRV208-1.png", 
        specs: [ 
            { label: "Sistema", value: "NovaStar" },
            { label: "Portas", value: "8 conectores HUB75E padrão" }, 
            { label: "Máx. Resolução", value: "Chips PWM:256×256px" }, 
            { label: "Dimensão", value: "95.5×109× 19.4 mm" },
            { label: "Rotação de imagem", value: "Não possui"},
            { label: "Profundidade de cores", value: "8Bits"},
            { label: "Taxa de quadros", value: "Até 60Hz"},
            
        ],
      
        equivalentProduct: "Colorlight 5A-75B",
        technicalFileUrl: "" 
    },
    { 
        name: "NovaStar MRV 412-N", 
        type: "receiver", 
        category: "cat-receiver cat-marca-b", 
        imageSrc: "img/MRV412-N.png", 
        specs: [ 
            { label: "Sistema", value: "NovaStar" },
            { label: "Portas", value: "12 conectores HUB75E padrão" }, 
            { label: "Máx. Resolução", value: "Chips PWM:512×384" }, 
            { label: "Dimensão", value: " 145.6m×91.5m×19.3mm" },
            { label: "Rotação de imagem", value: "Possui"},
            { label: "Profundidade de cores", value: "18 Bits"},
            { label: "Taxa de quadros", value: "Até 60Hz"},
            
        ],
  
        equivalentProduct: "Colorlight E120",
        technicalFileUrl: ""
    },
    { 
        name: "Colorlight E120", 
        type: "receiver", 
        category: "cat-receiver cat-marca-b", 
        imageSrc: "img/E120.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Portas", value: "12 conectores HUB75E padrão" }, 
            { label: "Máx. Resolução", value: "chips PWM: 192×1024 pixels" }, 
            { label: "Dimensão", value: " 145.2mm×91.7mm×18.4mm" },
            { label: "Rotação de imagem", value: "Possui"},
            { label: "Profundidade de cores", value: "8 Bits"},
            { label: "Taxa de quadros", value: "Até 60Hz, e imagens de alta taxa de quadros de 120/240Hz"},

            ],
        equivalentProduct: "NovaStar MRV 412-N",
        technicalFileUrl: "" 
            
    },
    { 
        name: "Colorlight 5A-75E", 
        type: "receiver", 
        category: "cat-receiver cat-marca-b", 
        imageSrc: "img/5A-75E.png", 
        specs: [ 
            { label: "Sistema", value: "Colorlight" },
            { label: "Portas", value: " 16 conectores HUB75E padrão" }, 
            { label: "Máx. Resolução", value: "chips PWM:256x1024" }, 
            { label: "Dimensão", value: "145.2 x91.7x 18.4mm " },
            { label: "Rotação de imagem", value: "Possui"},
            { label: "Profundidade de cores", value: "8 Bits"},
            { label: "Taxa de quadros", value: "Até 60Hz, e imagens de alta taxa de quadros de 120/240Hz"},

            ],
        equivalentProduct: "NovaStar MRV416-N",
        technicalFileUrl: "" 
            
    },
        { 
        name: "NovaStar MRV416-N", 
        type: "receiver", 
        category: "cat-receiver cat-marca-b", 
        imageSrc: "img/MRV416-N.png", 
        specs: [ 
            { label: "Sistema", value: "NovaStar" },
            { label: "Portas", value: " 16 conectores HUB75E padrão" }, 
            { label: "Máx. Resolução", value: "chips PWM:256x1024" }, 
            { label: "Dimensão", value: "145.6 x91.5x 19.3mm " },
            { label: "Rotação de imagem", value: "Possui"},
            { label: "Profundidade de cores", value: "18+ Bits"},
            { label: "Taxa de quadros", value: "Até 60Hz, e imagens de alta taxa de quadros de 120/240Hz"},

            ],
        equivalentProduct: "Colorlight 5A-75E",
        technicalFileUrl: "" 
            
    },
 
    { 
        name: "TB2", 
        type: "tbs", 
        category: "cat-tbs", 
        imageSrc: "img/TB2.png", 
        specs: [ 
            { label: "Sistema", value: "NovaStar" },
            { label: "Entradas", value: "1x HDMI, SIM-CARD, 1X USB2.0, 1X ETHERNET" },
            { label: "Memoria RAM", value: "1GB" },
            { label: "Saídas", value: "1x Portas RJ45" }, 
            { label: "Armazenamento interno", value: "32GB" },
            { label: "Processamento", value: "4 core 1.2 GHz" },
            { label: "Capacidade", value: "650 mil pixels" },
            { label: "Resolução de entrada", value: "1920x1080p" },
            { label: "Dimensões", value: "335 ×190 ×62mm" },
            { label: "Consumo", value: "15W" },
            
        ],
        technicalFileUrl: "pdfs/TB2.pdf"
    },
    { 
        name: "TB40", 
        type: "tbs", 
        category: "cat-tbs", 
        imageSrc: "img/TB40.png", 
        specs: [
            { label: "Sistema", value: "NovaStar" },
            { label: "Entradas", value: "1x HDMI(1x OUT), SIM-CARD, 1X USB2.0, 1X ETHERNET" },
            { label: "Memoria RAM", value: "1GB" },
            { label: "Saídas", value: "2x Portas RJ45" }, 
            { label: "Armazenamento interno", value: "32GB" },
            { label: "Processamento", value: "4 core 1.8 GHz" },
            { label: "Capacidade", value: "1.3 milhoes de pixels" },
            { label: "Resolução de entrada", value: "1920x1200p" },
            { label: "Dimensões", value: "385 ×280 ×75mm" },
            { label: "Consumo", value: "18W" },


         ],
        technicalFileUrl: "pdfs/TB40.pdf"
    },
   { 
        name: "TB50", 
        type: "tbs", 
        category: "cat-tbs", 
        imageSrc: "img/TB50.png", 
        specs: [ 
            { label: "Sistema", value: "NovaStar" },
            { label: "Entradas", value: "1x HDMI(1x OUT), SIM-CARD, 1X USB2.0, 1X ETHERNET" },
            { label: "Memoria RAM", value: "1GB" },
            { label: "Saídas", value: "2x Portas RJ45" }, 
            { label: "Armazenamento interno", value: "16GB" },
            { label: "Processamento", value: "4 core 1.8 GHz" },
            { label: "Capacidade", value: "1.3 milhoes de pixels" },
            { label: "Resolução de entrada", value: "1920x1200p" },
            { label: "Dimensões", value: "385.0 ×280.0 ×75.0 mm" },
            { label: "Consumo", value: "18W" },

        ],
        technicalFileUrl: "pdfs/TB50.pdf"
    },





];

