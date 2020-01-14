import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "visittype"
})
export class VisittypePipe implements PipeTransform {
  transform(value: Number, ...args: any[]): string {
    if (value == 0) return "";
    return VisitTypes[value];
  }
}

enum VisitTypes {
  "form.visitTypes.choose",
  "form.visitTypes.supplier",
  "form.visitTypes.candidate",
  "form.visitTypes.visit"
}
