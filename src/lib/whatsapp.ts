const WHATSAPP_NUMBER = "573022302548";

function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappLinks = {
  base: buildWhatsAppLink(
    "Hola INGCISOL 👋 Vi su página web y me interesa solicitar una cotización. ¿Podemos hablar?"
  ),
  service: (serviceName: string) =>
    buildWhatsAppLink(
      `Hola INGCISOL 👋 Me interesa el servicio de ${serviceName}. ¿Pueden cotizarlo?`
    ),
  procuraAI: buildWhatsAppLink(
    "Hola INGCISOL 👋 Vi información sobre PROCURA AI en su página. Quisiera saber más sobre cómo funciona y si podría aplicarlo en mi empresa."
  ),
  camacolWaitlist: buildWhatsAppLink(
    "Hola INGCISOL 👋 Quiero registrar mi interés en PROCURA AI antes de que esté disponible para otras empresas constructoras."
  ),
  custom: (message: string) => buildWhatsAppLink(message),
};
