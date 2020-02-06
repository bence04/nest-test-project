import { ApiProperty } from "@nestjs/swagger";

export class FilterDto {
    @ApiProperty({ required: false })
    readonly name: string;

    @ApiProperty({ required: false })
    readonly size: number;
}