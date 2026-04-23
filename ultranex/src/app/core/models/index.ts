/* ============================================
   ULTRANEX – Core Models / Interfaces
   ============================================ */

export interface Envio {
  id: number;
  codigo_tracking: string;
  remitente: Persona;
  destinatario: Persona;
  origen: string;
  destino: string;
  descripcion: string;
  tipo_servicio: TipoServicio;
  tipo_envio: TipoEnvio;
  estado: EstadoEnvio;
  peso_kg: number;
  dimensiones?: Dimensiones;
  costo: number;
  fecha_creacion: string;
  fecha_estimada_entrega: string;
  fecha_entrega_real?: string;
  historial: HistorialEnvio[];
  transportista?: Usuario;
  notas?: string;
}

export interface Persona {
  nombre: string;
  apellido: string;
  telefono: string;
  email?: string;
  direccion: string;
  ciudad: string;
  ci?: string;
}

export interface Dimensiones {
  largo_cm: number;
  ancho_cm: number;
  alto_cm: number;
}

export interface HistorialEnvio {
  id: number;
  estado: EstadoEnvio;
  descripcion: string;
  ubicacion: string;
  fecha: string;
  latitud?: number;
  longitud?: number;
  operador?: string;
}

export type EstadoEnvio =
  | 'recibido'
  | 'en_proceso'
  | 'en_transito'
  | 'en_almacen'
  | 'en_reparto'
  | 'entregado'
  | 'retrasado'
  | 'devuelto'
  | 'cancelado';

export type TipoServicio = 'normal' | 'expreso';
export type TipoEnvio = 'documento' | 'paquete' | 'caja' | 'especial' | 'fragil' | 'muestra';

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  rol: RolUsuario;
  activo: boolean;
  avatar?: string;
  fecha_registro: string;
}

export type RolUsuario = 'cliente' | 'transportista' | 'admin' | 'superadmin';

export interface Oficina {
  id: number;
  ciudad: string;
  departamento: string;
  direccion: string;
  telefono: string;
  email: string;
  latitud: number;
  longitud: number;
  horario: string;
  responsable?: string;
  activa: boolean;
}

export interface Cotizacion {
  origen: string;
  destino: string;
  peso_kg: number;
  tipo_servicio: TipoServicio;
  tipo_envio: TipoEnvio;
}

export interface CotizacionResult {
  precio_normal: number;
  precio_expreso: number;
  tiempo_normal: string;
  tiempo_expreso: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface DashboardMetrics {
  total_envios: number;
  envios_hoy: number;
  entregados_hoy: number;
  en_transito: number;
  retrasados: number;
  ingresos_mes: number;
  tasa_entrega: number;
}

export interface AuthUser {
  token: string;
  user: Usuario;
}

export interface LoginPayload {
  email: string;
  password: string;
}
