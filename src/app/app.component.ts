import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Plan = {
  id: string;
  zone: string;
  title: string;
  setupLabel: string;
  setupPrice: number | null;
  plans: { name: string; speed: string; price: number; note?: string }[];
};
type Product = { id: number; title: string; description: string; image: string; category: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  mobileMenuOpen = false;
  adminOpen = false;
  adminAuthenticated = false;
  adminPassword = '';
  adminError = '';
  adminTab: 'plans' | 'products' = 'plans';
  selectedPlan: { zone: string; plan: Plan['plans'][number]; setupLabel: string; setupPrice: number | null } | null = null;
  checkoutStep: 'form' | 'success' = 'form';
  buyerName = '';
  buyerPhone = '';
  buyerZone = '';
  notice = '';

  plans: Plan[] = [
    {
      id: 'z1', zone: 'ZONA 01', title: 'SANTA ROSA DE OSOS, ENTERRRÍOS Y DON MATÍAS',
      setupLabel: 'Afiliación', setupPrice: 125000,
      plans: [
        { name: 'Internet', speed: '5 MEGAS', price: 75000 },
        { name: 'Internet', speed: '8 MEGAS', price: 85000 },
        { name: 'Internet', speed: '10 MEGAS', price: 125000, note: 'Incluye TV: más de 500 canales, series y películas. + $50.000 por la instalación. Equipo en comodato.' }
      ]
    },
    {
      id: 'z2', zone: 'ZONA 02', title: 'CISNEROS Y SANTO DOMINGO',
      setupLabel: 'Afiliación', setupPrice: 150000,
      plans: [
        { name: 'Internet', speed: '3 MEGAS', price: 65000 },
        { name: 'Internet', speed: '5 MEGAS', price: 85000 },
        { name: 'Internet', speed: '8 MEGAS', price: 100000 },
        { name: 'Internet', speed: '10 MEGAS', price: 125000, note: 'Incluye TV: más de 500 canales, series y películas. + $50.000 por la instalación.' }
      ]
    },
    {
      id: 'z3', zone: 'ZONA 03', title: 'SAN PABLO, ARAGÓN Y LABORES',
      setupLabel: 'Instalación', setupPrice: 60000,
      plans: [
        { name: 'INTERNET', speed: '', price: 55000 },
        { name: 'INTERNET + TV', speed: '', price: 75000 },
        { name: 'SOLO TV', speed: '', price: 35000 }
      ]
    },
    {
      id: 'z4', zone: 'ZONA 04', title: 'SAN JOSÉ DE LA MONTAÑA',
      setupLabel: 'Línea', setupPrice: null,
      plans: [
        { name: 'SOLO TV', speed: '', price: 30000 },
        { name: 'INTERNET', speed: '', price: 45000 },
        { name: 'INTERNET + TV', speed: '', price: 79000 }
      ]
    }
  ];

  products: Product[] = [
    { 
      id: 1, 
      title: 'Cámaras de seguridad', 
      description: 'Soluciones de videovigilancia para viviendas, fincas y negocios.', 
      image: 'https://concordsecurity.com.pa/wp-content/uploads/2022/09/2641X1204_Tipos-de-Camaras-1536x700.jpg', 
      category: 'Seguridad' 
    },

    { 
      id: 2, 
      title: 'Antenas Ubiquiti', 
      description: 'Equipos de radioenlace para conectar lugares de difícil acceso.', 
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80', 
      category: 'Conectividad' 
    },
    { 
      id: 3, 
      title: 'Redes de datos', 
      description: 'Infraestructura y cableado para una conexión estable y organizada.', 
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80', 
      category: 'Redes' 
    },
    { 
      id: 4, 
      title: 'Redes eléctricas', 
      description: 'Implementación y adecuación de soluciones eléctricas.', 
      image: 'https://descubrelaenergia.fundaciondescubre.es/files/2013/09/red-electrica-650x432.jpg', 
      category: 'Instalaciones' 
    },
    { 
      id: 5, 
      title: 'Automatización y domótica', 
      description: 'Tecnología para controlar y automatizar espacios de forma práctica.', 
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80', 
      category: 'Tecnología' 
    }
  ];

  readonly services = [
    { icon: '◉', title: 'Cámaras de seguridad', text: 'Vigila tus espacios con soluciones de videoseguridad.' },
    { icon: '⌁', title: 'Antenas de radioenlace UBIQUITI', text: 'Conectividad inalámbrica para zonas rurales.' },
    { icon: '⌘', title: 'Redes de datos', text: 'Instalación y organización de redes y cableado.' },
    { icon: 'ϟ', title: 'Redes eléctricas', text: 'Soluciones eléctricas para tus proyectos.' },
    { icon: '⌂', title: 'Automatización y domótica', text: 'Haz que la tecnología trabaje por ti.' }
  ];

  readonly reasons = [
    { number: '01', title: 'Conectividad donde la necesitas', text: 'Acercamos el internet a hogares, fincas y negocios de zonas rurales.' },
    { number: '02', title: 'Soluciones en un solo lugar', text: 'Internet, redes, seguridad y tecnología para tus espacios.' },
    { number: '03', title: 'Acompañamiento cercano', text: 'Te orientamos para encontrar la alternativa adecuada para tu zona.' }
  ];

  formatPrice(value: number): string {
    return '$' + value.toLocaleString('es-CO');
  }

  openPlan(zone: Plan, plan: Plan['plans'][number]): void {
    this.selectedPlan = { zone: zone.title, plan, setupLabel: zone.setupLabel, setupPrice: zone.setupPrice };
    this.checkoutStep = 'form';
    this.buyerName = '';
    this.buyerPhone = '';
    this.buyerZone = '';
  }

  closePlan(): void {
    this.selectedPlan = null;
    this.notice = '';
  }

  confirmDemoPurchase(): void {
    if (!this.buyerName.trim() || !this.buyerPhone.trim() || !this.buyerZone.trim()) {
      this.notice = 'Completa tu nombre, teléfono y vereda/sector para continuar.';
      return;
    }
    // MVP ONLY: no payment is processed and no order is sent or persisted.
    this.checkoutStep = 'success';
    this.notice = '';
  }

  toggleAdmin(): void {
    this.adminOpen = !this.adminOpen;
    this.adminError = '';
  }

  loginAdmin(): void {
    // Demo access only. Change this before any public deployment.
    if (this.adminPassword === 'FMAdmin2026!') {
      this.adminAuthenticated = true;
      this.adminError = '';
    } else {
      this.adminError = 'Contraseña incorrecta.';
    }
  }

  logoutAdmin(): void {
    this.adminAuthenticated = false;
    this.adminPassword = '';
  }

  addProduct(): void {
    this.products = [...this.products, {
      id: Date.now(), title: 'Nuevo producto', description: 'Edita la descripción del producto.',
      image: '', category: 'Nuevo'
    }];
  }

  removeProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  saveLocalDemo(): void {
    // In-memory only; changes reset on reload because there is no database yet.
    this.notice = 'Cambios aplicados en esta sesión. Sin base de datos, se perderán al recargar la página.';
    setTimeout(() => this.notice = '', 5000);
  }

  trackPlan(_index: number, item: Plan): string { return item.id; }
  trackProduct(_index: number, item: Product): number { return item.id; }
}
