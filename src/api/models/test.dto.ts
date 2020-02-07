import { ApiProperty } from "@nestjs/swagger";

export class CreateTestDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly age: number;

    @ApiProperty({ required: false })
    readonly isOptional: boolean;
}

export class TestDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly age: number;

    @ApiProperty({ required: false })
    readonly isOptional: boolean;
}