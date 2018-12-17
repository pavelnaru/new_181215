import { Component, OnInit } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, Routes } from '@angular/router';
import { activateRoute } from 'app/account';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'jhi-hello-world',
    templateUrl: './hello-world.component.html',
    styles: []
})
export class HelloWorldComponent implements OnInit {
    fromLocation: string;
    result: string;
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.fromLocation = this.activatedRoute.snapshot.paramMap.get('from') || 'nowhere';
    }
}
