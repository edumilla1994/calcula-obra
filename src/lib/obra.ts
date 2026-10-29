export type TipoLadrillo = 'king-kong-18' | 'pandereta' | 'bloque-12' | 'bloque-15';

export const LADRILLOS: Record<TipoLadrillo, { nombre: string; largo: number; alto: number; junta: number }> = {
  'king-kong-18': { nombre: 'King Kong 18 huecos', largo: 0.24, alto: 0.09, junta: 0.015 },
  pandereta: { nombre: 'Pandereta', largo: 0.23, alto: 0.11, junta: 0.015 },
  'bloque-12': { nombre: 'Bloque de concreto 12 cm', largo: 0.39, alto: 0.12, junta: 0.015 },
  'bloque-15': { nombre: 'Bloque de concreto 15 cm', largo: 0.39, alto: 0.15, junta: 0.015 },
};

export type Resistencia = '140' | '175' | '210' | '280';

export const CONCRETO: Record<Resistencia, { bolsas: number; arena: number; piedra: number; agua: number }> = {
  '140': { bolsas: 7.0, arena: 0.56, piedra: 0.56, agua: 0.185 },
  '175': { bolsas: 8.0, arena: 0.54, piedra: 0.55, agua: 0.18 },
  '210': { bolsas: 9.5, arena: 0.52, piedra: 0.53, agua: 0.175 },
  '280': { bolsas: 11.5, arena: 0.5, piedra: 0.51, agua: 0.17 },
};

export function unidadesPorM2(tipo: TipoLadrillo): number {
  const l = LADRILLOS[tipo];
  return 1 / ((l.largo + l.junta) * (l.alto + l.junta));
}

export function calcularLadrillos(area: number, tipo: TipoLadrillo, desperdicio = 0.05) {
  const porM2 = unidadesPorM2(tipo);
  const cantidad = Math.ceil(area * porM2 * (1 + desperdicio));
  return { porM2, cantidad };
}

export function calcularConcreto(volumen: number, resistencia: Resistencia) {
  const d = CONCRETO[resistencia];
  return {
    bolsas: Math.ceil(volumen * d.bolsas),
    arena: volumen * d.arena,
    piedra: volumen * d.piedra,
    agua: volumen * d.agua,
  };
}

export function calcularPintura(area: number, manos: number, rendimiento = 10, desperdicio = 0.05) {
  const litros = (area * manos / rendimiento) * (1 + desperdicio);
  return { litros, galones: litros / 3.785 };
}

export function calcularLosetas(area: number, largo: number, ancho: number, desperdicio = 0.1) {
  const porM2 = 1 / (largo * ancho);
  const unidades = Math.ceil(area * porM2 * (1 + desperdicio));
  return { porM2, unidades };
}

export function fmt(n: number, decimales = 2): string {
  return new Intl.NumberFormat('es-PE', {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(n);
}

export function m2(largo: number, alto: number, paredes = 1): number {
  return largo * alto * paredes;
}
