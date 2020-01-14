import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "olddatefilter"
})
export class OlddatefilterPipe implements PipeTransform {
  transform(value: Date, ...args: any[]): string {
    var current = new Date(value);
    if (current.getFullYear() < 1755) return "-";
    return value.toString();
  }
}
