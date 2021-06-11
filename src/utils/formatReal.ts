export function formatReal(int: string) {
  int = int.replace(/\D/g, '');
  if (int.length < 6) {
    int = int.replace(/([0-9]{2})$/g, ',$1');
  }
  if (int.length >= 6) {
    int = int.replace(/(\d)(\d{3})(\d{2})$/g, '$1.$2,$3');
  }
  return int;
}
